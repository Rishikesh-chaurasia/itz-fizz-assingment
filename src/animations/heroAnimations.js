import gsap from "gsap"

export function runHeroIntroAnimation({
  label,
  title,
  subtitle,
  visual,
  stats,
  scrollIndicator,
}) {
  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  })

  timeline
    // Label
    .fromTo(
      label,
      {
        y: 25,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
      }
    )

    // Main title
    .fromTo(
      title,
      {
        y: 80,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
      },
      "-=0.25"
    )

    // Subtitle
    .fromTo(
      subtitle,
      {
        y: 60,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.9,
      },
      "-=0.65"
    )

    // Main visual
    .fromTo(
      visual,
      {
        scale: 0.7,
        autoAlpha: 0,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 1.1,
        ease: "power3.out",
      },
      "-=0.55"
    )

    // Stats stagger
    .fromTo(
      stats,
      {
        y: 35,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.65,
        stagger: 0.2,
      },
      "-=0.65"
    )

    // Scroll indicator
    .fromTo(
      scrollIndicator,
      {
        y: 15,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
      },
      "-=0.25"
    )

  return timeline
}
