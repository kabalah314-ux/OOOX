import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        {t("eyebrow")}
      </p>
      <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-lg text-neutral-500">
        {t("subtitle")}
      </p>
      <a
        href="#contacto"
        className="mt-10 inline-flex rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
      >
        {t("cta")}
      </a>
      <p className="mt-16 text-xs text-neutral-300">
        Hito 1 · esqueleto Next.js + i18n · pendiente dirección de arte
      </p>
    </main>
  );
}
