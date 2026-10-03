import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navRef = useRef(null)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // =========================
  // NAVBAR INTRO ANIMATION
  // =========================

  useEffect(() => {
    const animation = gsap.fromTo(
      navRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      }
    )

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <nav
      ref={navRef}
      className="absolute left-0 top-0 z-50 w-full px-6 py-6 sm:px-10 lg:px-14"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* =========================
            LOGO
        ========================== */}

        <a
          href="#top"
          onClick={closeMenu}
          className="relative z-50 text-xl font-black tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-70"
        >
          ITZ<span className="text-lime-400">/</span>FIZZ
        </a>


        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}

        <div className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] text-white/50 md:flex">

          <a
            href="#work"
            className="transition-colors duration-300 hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>

        </div>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:border-lime-400/40 hover:bg-lime-400/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="text-lg leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>

      </div>


      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        id="mobile-menu"
        className={`absolute left-4 right-4 top-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >

        <div className="flex flex-col p-3">

          <a
            href="#work"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-xl px-5 py-4 text-sm uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-white"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
