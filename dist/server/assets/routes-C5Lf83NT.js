//#region src/lib/config.ts
var getEnv = (key, fallback) => {
	const value = {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"TSS_DEV_SERVER": "false",
		"TSS_DEV_SSR_STYLES_BASEPATH": "/",
		"TSS_DEV_SSR_STYLES_ENABLED": "true",
		"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
		"TSS_INLINE_CSS_ENABLED": "false",
		"TSS_ROUTER_BASEPATH": "",
		"TSS_SERVER_FN_BASE": "/_serverFn/"
	}[key];
	return typeof value === "string" && value.trim().length > 0 ? value : fallback;
};
var brandName$1 = getEnv("VITE_BRAND_NAME", "ALPAZA");
var tagline$1 = getEnv("VITE_TAGLINE", "Made for the Move");
var siteUrl$1 = getEnv("VITE_SITE_URL", "https://www.alpazaa.in").replace(/\/$/, "");
var instagramUrl$1 = getEnv("VITE_INSTAGRAM_URL", "https://www.instagram.com/alpaza.wear/");
var whatsappBaseUrl = getEnv("VITE_WHATSAPP_URL", "https://wa.me/919259880496");
var phoneNumber$1 = getEnv("VITE_PHONE_NUMBER", "+919259880496");
var location$1 = getEnv("VITE_LOCATION", "Meerut Studio");
var seoTitle = getEnv("VITE_SEO_TITLE", "ALPAZA — Made for the Move");
var seoDescription = getEnv("VITE_SEO_DESCRIPTION", "Premium oversized clothing brand.");
var whatsappMessage = `Hi ${brandName$1}, I'd like to place an order.`;
var appConfig = {
	brandName: brandName$1,
	tagline: tagline$1,
	siteUrl: siteUrl$1,
	instagramUrl: instagramUrl$1,
	whatsappUrl: `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`,
	phoneNumber: phoneNumber$1,
	displayPhoneNumber: "+91 92598 80496",
	location: location$1,
	seoTitle,
	seoDescription,
	ogImage: "/og-image.jpg",
	instagramHandle: "@alpaza.wear",
	seoKeywords: "ALPAZA, luxury clothing, minimal fashion, athleisure, premium essentials, made for the move, coming soon"
};
//#endregion
//#region src/routes/index.tsx?tsr-shared=1
var { brandName, tagline, instagramUrl, whatsappUrl, phoneNumber, displayPhoneNumber, location, siteUrl, seoKeywords, instagramHandle } = appConfig;
//#endregion
export { location as a, siteUrl as c, appConfig as d, instagramUrl as i, tagline as l, displayPhoneNumber as n, phoneNumber as o, instagramHandle as r, seoKeywords as s, brandName as t, whatsappUrl as u };
