const getEnv = (key: string, fallback: string) => {
  const value = import.meta.env[key];
  return typeof value === "string" && value.trim().length > 0
    ? value
    : fallback;
};

const brandName = getEnv("VITE_BRAND_NAME", "ALPAZA");
const tagline = getEnv("VITE_TAGLINE", "Made for the Move");
const siteUrl = getEnv("VITE_SITE_URL", "https://www.alpaza.in").replace(
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
const location = getEnv("VITE_LOCATION", "Meerut, Uttar Pradesh, India");
const seoTitle = getEnv(
  "VITE_SEO_TITLE",
  "ALPAZA — Premium Oversized T-Shirts | Made in India",
);
const seoDescription = getEnv(
  "VITE_SEO_DESCRIPTION",
  "ALPAZA is a premium oversized T-shirt brand made in India. Shop minimal luxury streetwear crafted from 100% premium cotton. B2B wholesale, B2C retail, and custom print available. Order via Instagram or WhatsApp.",
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
  ogImage: `${siteUrl}/og-image.jpg`,
  instagramHandle,
  /** Comprehensive keyword set covering all target search terms */
  seoKeywords:
    "ALPAZA, premium oversized t-shirts, oversized t-shirts India, men's oversized tee, premium cotton t-shirts, streetwear brand India, minimal luxury clothing, Made in India apparel, apparel manufacturer India, wholesale t-shirts India, B2B clothing supplier, B2C fashion brand, bulk t-shirt order, custom print t-shirts, oversized fit tees, 240 GSM t-shirt, Meerut clothing brand, UP streetwear, premium essentials, made for the move",
  /** Twitter/X handle (without @) */
  twitterHandle: "alpaza_wear",
  /** Locale for Open Graph */
  ogLocale: "en_IN",
  /** Geo coordinates for local SEO */
  geoRegion: "IN-UP",
  geoPlaceName: "Meerut, U.P., India",
  /** Full absolute OG image URL */
  get ogImageAbsolute() {
    return `${siteUrl}/og-image.jpg`;
  },
} as const;
