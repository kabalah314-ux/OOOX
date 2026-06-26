import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/HeroSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  const heroT = {
    eyebrow: t("eyebrow"),
    l1: t("l1"),
    l2: t("l2"),
    l3: t("l3"),
    sub: t("sub"),
    cta1: t("cta1"),
    cta2: t("cta2"),
    scroll: t("scroll"),
  };

  return (
    <main>
      <HeroSection t={heroT} locale={locale} />
    </main>
  );
}
