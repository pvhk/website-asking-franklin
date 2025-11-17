import type { APIRoute } from 'astro';
import * as brevo from '@getbrevo/brevo';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { firstName, email, lang } = body;
    const preferredLang = (lang || 'en') as 'en' | 'fr';

    // Validation
    if (!firstName || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'First name and email are required'
        }),
        { status: 400 }
      );
    }

    // Vérifier que la clé API Brevo est configurée
    const apiKey = import.meta.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('BREVO_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Newsletter service not configured'
        }),
        { status: 500 }
      );
    }

    // Configurer le client Brevo
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

    // Créer ou mettre à jour le contact
    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.attributes = {
      FIRSTNAME: firstName,
      LANGUAGE: preferredLang
    };

    // Ajouter à la liste (optionnel) via variable d'environnement BREVO_LIST_ID
    const listIdRaw = import.meta.env.BREVO_LIST_ID as string | undefined;
    if (listIdRaw) {
      const listId = Number(listIdRaw);
      if (!Number.isNaN(listId)) {
        createContact.listIds = [listId];
      }
    }

    // Envoyer la requête à Brevo
    await apiInstance.createContact(createContact);

    return new Response(
      JSON.stringify({
        success: true,
        message: preferredLang === 'fr'
          ? 'Inscription réussie ! Merci de vous être inscrit à La Dépêche.'
          : 'Successfully subscribed! Thank you for subscribing to The Dispatch.'
      }),
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);

    // Gérer l'erreur si le contact existe déjà
    if (error?.response?.statusCode === 400 && error?.response?.body?.code === 'duplicate_parameter') {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'This email is already subscribed.'
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred while subscribing."
      }),
      { status: 500 }
    );
  }
};
