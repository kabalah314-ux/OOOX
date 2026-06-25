# OOOX — landing inmersiva de servicios de IA a medida (pymes)

> 🟢 **Guía vigente:** `GUIA-MAESTRA.md` (v0.1 · cadena: v0.1 🟢)

Landing pro **minimalista clara** que vende los servicios de IA a medida de Oscar (webs, apps
y automatizaciones) a pequeños y medianos negocios. Narrativa en 3 actos: **dolor resuelto →
apps tocables → cómo lo hago (la fábrica) → reserva de llamada.**

## Cómo se construye
- **Método:** pipeline **`web-premium`** (orquesta narrativa → arte → assets IA → motion →
  ingeniería → deploy). NO usa molde (web inmersiva, se diseña de cero). Ver guía §5.7.
- **Stack:** Next.js (App Router) + React Three Fiber + GSAP + Lenis · i18n ES/EN · Vercel.
- **Plan de build por hitos y checkpoints:** guía §7.1 y §7.5.

## Reglas
- Hereda las reglas comunes de `../CLAUDE.md` (autonomía, permiso para pagos/borrados/push/deploy,
  sync con GitHub antes de tocar, ramas/PR, secretos solo en `.env.local`).
- **Condiciones del GO (guía §9.4):** cumplir RGPD en formulario/reserva; **nunca exponer datos
  reales de cliente** (BrokenHeart → instancia demo ficticia); contar la fábrica como "a medida
  rápido", nunca "plantillas".
- **Antes de dar foco público a chordflow:** rotar sus secretos expuestos.

## Estado
- Guía maestra **completa** (Fases 00–07, veredicto 🟢 GO). Lista para construir.
- Próximo: Hito 1 (setup Next.js + i18n + deploy en blanco).
