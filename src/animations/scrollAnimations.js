import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function runHeroScrollAnimation({
  section,
  visual,
  orb,
  orbit,
}) {
  if (!section || !visual) return null

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "+=1400",
      pin: true,
      scrub: 1.5,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  // Main visual movement
  timeline.to(
    visual,
    {
      x: 160,
      y: -30,
      scale: 1.05,
      rotation: 12,
      force3D: true,
      ease: "none",
      duration: 1,
    },
    0
  )

  // Orb rotation
  if (orb) {
    timeline.to(
      orb,
      {
        rotation: 180,
        scale: 1.15,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      0
    )
  }

  // Orbit system
  if (orbit) {
    timeline.to(
      orbit,
      {
        rotation: 120,
        scale: 1.08,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      0
    )
  }

  // Second movement
  timeline.to(
    visual,
    {
      x: -170,
      y: 45,
      scale: 0.9,
      rotation: -10,
      force3D: true,
      ease: "none",
      duration: 1,
    }
  )

  if (orb) {
    timeline.to(
      orb,
      {
        rotation: 360,
        scale: 0.92,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      "<"
    )
  }

  if (orbit) {
    timeline.to(
      orbit,
      {
        rotation: 240,
        scale: 0.94,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      "<"
    )
  }

  // Final position
  timeline.to(
    visual,
    {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      force3D: true,
      ease: "none",
      duration: 1,
    }
  )

  if (orb) {
    timeline.to(
      orb,
      {
        rotation: 540,
        scale: 1,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      "<"
    )
  }

  if (orbit) {
    timeline.to(
      orbit,
      {
        rotation: 360,
        scale: 1,
        force3D: true,
        ease: "none",
        duration: 1,
      },
      "<"
    )
  }

  return timeline
}
