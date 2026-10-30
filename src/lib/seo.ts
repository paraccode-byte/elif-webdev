import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface ConstructMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
  type?: "website" | "article";
  publishedTime?: string;
  keywords?: string[];
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = "/images/logo.jpeg",
  urlPath = "",
  type = "website",
  publishedTime,
  keywords = [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa website UMKM",
    "jasa pembuatan company profile",
    "jasa landing page",
    "jasa pembuatan website Indonesia",
    "jasa AI chatbot",
    "jasa digital marketing",
    "jasa iklan Meta Ads",
    "jasa TikTok Ads",
    "jasa pembuatan API",
    "jasa website dan digital marketing",
  ],
}: ConstructMetadataProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — One Stop Digital Solution | Jasa Pembuatan Website & Digital Marketing`;

  const canonicalUrl = `${siteConfig.url}${urlPath.startsWith("/") ? urlPath : `/${urlPath}`}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "id_ID",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title || siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@elif_webdev",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/images/logo.jpeg",
      shortcut: "/images/logo.jpeg",
      apple: "/images/logo.jpeg",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.whatsappFormatted,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    priceRange: "Rp420.000 - Rp1.200.000",
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
    })),
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Indonesia",
    url: `${siteConfig.url}/layanan/${service.slug}`,
  };
}
