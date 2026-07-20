const getEnv = (key: string, fallback: string) => {
  const value = import.meta.env[key];
  return typeof value === "string" && value.trim().length > 0
    ? value
    : fallback;
};

const brandName = getEnv("VITE_BRAND_NAME", "ALPAZA");
const tagline = getEnv("VITE_TAGLINE", "Made for the Move");
const siteUrl = getEnv("VITE_SITE_URL", "https://www.alpazaa.in").replace(
  /\/$/,
  "",
);
const rawInstagramUrl = getEnv(
  "VITE_INSTAGRAM_URL",
  "https://www.instagram.com/alpaza.wear/",
);
const whatsappBaseUrl = getEnv(
  "VITE_WHATSAPP_URL",
  "https://wa.me/919259880496",
);
const phoneNumber = getEnv("VITE_PHONE_NUMBER", "+919259880496");
const location = getEnv("VITE_LOCATION", "Meerut Studio");
const seoTitle = getEnv("VITE_SEO_TITLE", "ALPAZA — Made for the Move");
const seoDescription = getEnv(
  "VITE_SEO_DESCRIPTION",
  "Premium oversized clothing brand.",
);

const whatsappMessage = `Hi ${brandName}, I'd like to place an order.`;

// Parse Instagram URL and Handle robustly to support handles (e.g. "alpaza.wear" or "@alpaza.wear")
// as well as full URLs in the environment variables.
const instagramUrl = rawInstagramUrl.startsWith("http")
  ? rawInstagramUrl
  : `https://www.instagram.com/${rawInstagramUrl.replace(/^@/, "")}`;

const instagramHandle = rawInstagramUrl.startsWith("http")
  ? rawInstagramUrl.replace(/\/$/, "").split("/").pop() || "alpaza.wear"
  : rawInstagramUrl.replace(/^@/, "");

export const appConfig = {
  brandName,
  tagline,
  siteUrl,
  instagramUrl,
  whatsappUrl: `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`,
  phoneNumber,
  displayPhoneNumber: "+91 92598 80496",
  location,
  seoTitle,
  seoDescription,
  ogImage: "/og-image.jpg",
  instagramHandle,
  seoKeywords:
    "ALPAZA, luxury clothing, minimal fashion, athleisure, premium essentials, made for the move, coming soon",
} as const;
