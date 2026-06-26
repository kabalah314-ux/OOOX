"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroT = {
  eyebrow: string;
  l1: string;
  l2: string;
  l3: string;
  sub: string;
  cta1: string;
  cta2: string;
  scroll: string;
};

export default function HeroSection({
  t,
  locale,
}: {
  t: HeroT;
  locale: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [
      eyebrowRef.current,
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      subRef.current,
      ctasRef.current,
    ].filter((el): el is HTMLElement => el !== null);

    gsap.set(targets, { opacity: 0, y: 24 });
    const tl = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: "power2.out",
      delay: 0.15,
    });

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      onUpdate: (self) => {
        if (orbsRef.current) {
          gsap.set(orbsRef.current, { y: self.progress * -140 });
        }
      },
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-svh overflow-hidden bg-white"
    >
      {/* Ambient O's */}
      <div
        ref={orbsRef}
        className="pointer-events-none absolute"
        style={{ right: -30, top: 96, width: 620, height: 620 }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            left: 40,
            top: 30,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "var(--acc)",
            opacity: 0.5,
            mixBlendMode: "multiply",
            animation: "ooxD1 22s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 248,
            top: 150,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "var(--acc)",
            opacity: 0.5,
            mixBlendMode: "multiply",
            animation: "ooxD2 26s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 298,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "var(--acc)",
            opacity: 0.5,
            mixBlendMode: "multiply",
            animation: "ooxD3 19s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-16"
        style={{ paddingTop: 34 }}
      >
        <a
          href={`/${locale}`}
          style={{
            fontFamily: "var(--font-bricolage), system-ui",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "#1C1916",
            textDecoration: "none",
          }}
        >
          <span style={{ letterSpacing: "-0.14em", marginRight: "0.16em" }}>
            OOO
          </span>
          X
        </a>

        <div
          className="flex items-center"
          style={{
            gap: 9,
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "var(--font-hanken), system-ui",
          }}
        >
          <Link
            href="/es"
            style={{
              color: locale === "es" ? "#1C1916" : "#b3aba1",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
          >
            ES
          </Link>
          <span
            style={{
              width: 1,
              height: 13,
              background: "#d9d3ca",
              display: "block",
            }}
          />
          <Link
            href="/en"
            style={{
              color: locale === "en" ? "#1C1916" : "#b3aba1",
              transition: "color 0.2s",
              textDecoration: "none",
            }}
          >
            EN
          </Link>
        </div>
      </nav>

      {/* Copy block */}
      <div
        className="relative z-10 px-6 sm:px-16"
        style={{ paddingTop: 164, paddingBottom: 80, maxWidth: 824 }}
      >
        <div
          ref={eyebrowRef}
          style={{
            fontFamily: "var(--font-hanken), system-ui",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#8a8278",
            marginBottom: 30,
          }}
        >
          {t.eyebrow}
        </div>

        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-bricolage), system-ui",
            fontWeight: 700,
            fontSize: "clamp(44px, 6.5vw, 86px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            color: "#1C1916",
          }}
        >
          <span ref={line1Ref} style={{ display: "block" }}>
            {t.l1}
          </span>
          <span ref={line2Ref} style={{ display: "block" }}>
            {t.l2}
          </span>
          <span
            ref={line3Ref}
            style={{ display: "block", color: "var(--acc2)" }}
          >
            {t.l3}
          </span>
        </h1>

        <p
          ref={subRef}
          style={{
            margin: "34px 0 0",
            fontFamily: "var(--font-hanken), system-ui",
            fontSize: "clamp(17px, 2vw, 22px)",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#6E665E",
            maxWidth: 520,
          }}
        >
          {t.sub}
        </p>

        <div
          ref={ctasRef}
          className="flex flex-wrap items-center"
          style={{ gap: 26, marginTop: 42 }}
        >
          <a href="#reservar" className="ooox-cta-primary">
            {t.cta1}{" "}
            <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
          </a>
          <a href="#ejemplos" className="ooox-cta-secondary">
            {t.cta2}{" "}
            <span style={{ fontSize: 16, opacity: 0.55 }}>↓</span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute z-10 hidden items-center sm:flex"
        style={{
          left: 64,
          bottom: 40,
          gap: 12,
          fontSize: 13,
          fontWeight: 500,
          color: "#9a948a",
          fontFamily: "var(--font-hanken), system-ui",
        }}
        aria-hidden="true"
      >
        <span
          style={{
            display: "block",
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "var(--acc)",
            animation: "ooxBob 2.4s ease-in-out infinite",
          }}
        />
        <span style={{ color: "#a39a8f" }}>{t.scroll}</span>
      </div>
    </section>
  );
}
