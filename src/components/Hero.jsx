import { useEffect, useRef } from "react"
import Stats from "./Stats"
import { runHeroIntroAnimation } from "../animations/heroAnimations"
import { runHeroScrollAnimation } from "../animations/scrollAnimations"

function Hero() {
  // =========================
  // GSAP REFS
  // =========================

  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const visualRef = useRef(null)

  // New animation refs
  const orbRef = useRef(null)
  const orbitRef = useRef(null)

  const statsRef = useRef(null)
  const scrollRef = useRef(null)

  // =========================
  // HERO INTRO ANIMATION
  // =========================

  useEffect(() => {
    const statsElements = statsRef.current?.children

    if (!statsElements?.length) return

    const animation = runHeroIntroAnimation({
      label: labelRef.current,
      title: titleRef.current,
      subtitle: subtitleRef.current,
      visual: visualRef.current,
      stats: statsElements,
      scrollIndicator: scrollRef.current,
    })

    return () => {
      animation?.kill()
    }
  }, [])

  // =========================
  // SCROLL ANIMATION
  // =========================

  useEffect(() => {
    const animation = runHeroScrollAnimation({
      section: sectionRef.current,
      visual: visualRef.current,
      orb: orbRef.current,
      orbit: orbitRef.current,
    })

    return () => {
      animation?.scrollTrigger?.kill()
      animation?.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="noise" />

      {/* Main Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]" />

      {/* Top Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-lime-400/[0.04] blur-[100px]" />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-10 pt-28 sm:px-10 lg:px-14">

        {/* =========================
            LABEL
        ========================== */}

        <div
          ref={labelRef}
          className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

          Digital Experience Studio
        </div>

        {/* =========================
            MAIN HEADING
        ========================== */}

        <div className="text-center">

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="text-[13vw] font-black uppercase leading-[0.78] tracking-[-0.07em] text-white sm:text-[10vw] lg:text-[8.5rem]"
          >
            WELCOME
          </h1>

          {/* Subtitle */}
          <h1
            ref={subtitleRef}
            className="mt-4 text-[8.5vw] font-black uppercase leading-[0.8] tracking-[0.12em] text-white/85 sm:text-[7vw] lg:text-[6rem]"
          >
            ITZ FIZZ
          </h1>

        </div>

        {/* =========================
            MAIN VISUAL
        ========================== */}

        <div
          ref={visualRef}
          className="relative my-10 flex h-[260px] w-full max-w-xl transform-gpu items-center justify-center will-change-transform sm:h-[320px]"

        >

          {/* =========================
              ORBIT SYSTEM
          ========================== */}

          <div
            ref={orbitRef}
            className="absolute inset-0 flex transform-gpu items-center justify-center will-change-transform"

          >

            {/* Outer Orbit */}
            <div className="absolute h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />

            {/* Lime Orbit */}
            <div className="absolute h-40 w-40 rounded-full border border-lime-400/20 sm:h-52 sm:w-52" />

            {/* Horizontal Orbit */}
            <div className="absolute h-36 w-56 rotate-12 rounded-[50%] border border-white/10 sm:h-44 sm:w-72" />

            {/* Opposite Orbit */}
            <div className="absolute h-36 w-56 -rotate-12 rounded-[50%] border border-white/10 sm:h-44 sm:w-72" />

          </div>

          {/* =========================
              MAIN ENERGY OBJECT
          ========================== */}

          <div
            ref={orbRef}
           className="relative flex h-36 w-36 transform-gpu items-center justify-center rounded-full bg-gradient-to-br from-lime-200 via-lime-400 to-emerald-500 shadow-[0_0_100px_rgba(163,230,53,0.3)] will-change-transform sm:h-44 sm:w-44"

          >

            {/* Glass Layer */}
            <div className="absolute inset-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md" />

            {/* Dark Inner Core */}
            <div className="relative h-20 w-20 rounded-full bg-[#050505]/70 shadow-[inset_0_0_30px_rgba(163,230,53,0.25)] sm:h-24 sm:w-24">

              {/* Core Light */}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_25px_white]" />

            </div>

            {/* Highlight */}
            <div className="absolute left-7 top-7 h-8 w-12 rotate-[-35deg] rounded-full bg-white/30 blur-md" />

          </div>

          {/* =========================
              ORBIT DOTS
          ========================== */}

          <div className="absolute h-3 w-3 translate-x-28 rounded-full bg-white shadow-[0_0_20px_white] sm:translate-x-36" />

          <div className="absolute h-2 w-2 -translate-x-28 translate-y-20 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.9)] sm:-translate-x-36" />

        </div>

        {/* =========================
            STATS HEADER
        ========================== */}

        <div className="mb-4 flex w-full max-w-3xl items-center justify-between px-1 text-[9px] uppercase tracking-[0.3em] text-white/25">
          <span>Performance</span>
          <span>2026 / 001</span>
        </div>

        {/* =========================
            STATS
        ========================== */}

        <Stats ref={statsRef} />

        {/* =========================
            SCROLL INDICATOR
        ========================== */}

        <div
          ref={scrollRef}
          className="mt-10 flex flex-col items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-white/30 sm:text-[10px]"
        >
          <span>Scroll to explore</span>

          <span className="text-lg text-lime-400">
            ↓
          </span>
        </div>

      </div>
    </section>
  )
}

export default Hero




