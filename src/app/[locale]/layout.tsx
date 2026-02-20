import type { Metadata } from "next";
import { GTProvider } from "gt-next";
import { getGT } from "gt-next/server";
import { getLocaleDirection } from "gt-next/server";
import "./globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();

  const title = gt("Cat Shrine | General Translation");
  const description = gt(
    "A 90s geocities-style cat appreciation shrine with full internationalization powered by General Translation."
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: "https://cat-shrine.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        ja: "/ja",
        fr: "/fr",
        ar: "/ar",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dir = getLocaleDirection(locale);
  return (
    <html lang={locale} dir={dir}>
      <body>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
