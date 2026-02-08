// Helper to get the base URL for GitHub Pages
// In production, this will be '/site-zip-deploy'
// In development, this will be ''
export const getBaseUrl = () => {
  return import.meta.env.BASE_URL || '';
};

// Helper to create proper URLs with base path
export const withBase = (path: string) => {
  const base = getBaseUrl();
  // Remove trailing slash from base and leading slash from path if both exist
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

// Helper to fix image URLs - handles both relative and absolute paths
export const withBaseImage = (imagePath: any): string | undefined => {
  // Handle undefined/null
  if (!imagePath) return imagePath;

  // Handle Vite image imports (objects with src property)
  // Vite already includes the base path in the src, so we can return it directly
  if (typeof imagePath === 'object' && imagePath.src) {
    return imagePath.src;
  }

  // Convert to string if it's not already
  const pathStr = typeof imagePath === 'string' ? imagePath : String(imagePath);

  // If it's already an absolute URL (http/https) or data URI, return as is
  if (pathStr.startsWith('http') || pathStr.startsWith('data:')) {
    return pathStr;
  }

  const base = getBaseUrl();

  // If the image path already starts with the base URL, return as is
  if (base && pathStr.startsWith(base)) {
    return pathStr;
  }

  // For ALL paths starting with /, we need to add the base
  // This includes /_astro/, /assets/, and any other root paths
  if (pathStr.startsWith('/')) {
    // Remove leading slash and add base
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    return `${cleanBase}${pathStr}`;
  }

  // For relative paths, add base
  return withBase(pathStr);
};
