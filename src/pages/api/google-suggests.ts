import type { APIRoute } from 'astro';

const BACKEND_URL = import.meta.env.BACKEND_API_URL || 'http://localhost:8000';

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const body = await request.json();
    const { keyword, language, country } = body;

    if (!keyword || typeof keyword !== 'string') {
      return new Response(
        JSON.stringify({ error: 'A keyword is required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const backendResponse = await fetch(`${BACKEND_URL}/api/public/google-suggests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Forwarded-For': clientAddress || 'unknown',
      },
      body: JSON.stringify({ keyword, language, country }),
    });

    const data = await backendResponse.json();

    return new Response(JSON.stringify(data), {
      status: backendResponse.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Google Suggests proxy error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
