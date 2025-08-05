import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Mail, Github, Linkedin, Sun, Moon, ChevronsUp } from "lucide-react";

const sections = ["About", "Skills", "Projects", "Contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(window.scrollY > 10);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    return sections.map(s => s.toLowerCase()).includes(hash) ? hash : "home";
  });
  const [hasAnimatedSocials, setHasAnimatedSocials] = useState(false);
  const [hasAnimatedControls, setHasAnimatedControls] = useState(false);

  const linkRefs = useRef([]);
  const faviconRef = useRef(null);
  const underlineRef = useRef(null);
  const navRef = useRef(null);
  const socialsRefs = useRef([]);
  const controlButtonsRefs = useRef([]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });

    tl.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    const isSmallScreen = window.innerWidth < 768;

    tl.fromTo(
      linkRefs.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: isSmallScreen ? 0 : 0.15,
      },
      "-=0.5"
    );

    if (activeSection !== "contact") {
      gsap.fromTo(
        socialsRefs.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.7,
          ease: "power2.out",
          delay: 2.75,
          onComplete: () => setHasAnimatedSocials(true),
        }
      );
    }

    const controlButtonsToShow = activeSection === "home" ? controlButtonsRefs.current[0] : controlButtonsRefs.current;
    gsap.fromTo(
      controlButtonsToShow,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        delay: 3.25,
        onComplete: () => setHasAnimatedControls(true),
      }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPos = window.scrollY + window.innerHeight / 2;

      const homeSection = document.getElementById("home");
      const homeRect = homeSection?.getBoundingClientRect();

      if (homeRect && homeRect.top <= window.innerHeight / 3 && homeRect.bottom >= window.innerHeight / 3) {
        setActiveSection("home");
        return;
      }

      const offsets = sections
        .map((section) => {
          const el = document.getElementById(section.toLowerCase());
          return el ? { id: section.toLowerCase(), top: el.offsetTop } : null;
        })
        .filter(Boolean);

      const current = offsets.findLast((offset) => scrollPos >= offset.top);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection === "home") return;

    const index = sections.findIndex(
      (sec) => sec.toLowerCase() === activeSection
    );
    const target = linkRefs.current[index];

    if (target && underlineRef.current) {
      const rect = target.getBoundingClientRect();
      const containerRect = target.parentElement.getBoundingClientRect();

      const x = rect.left - containerRect.left;
      const width = rect.width;

      gsap.to(underlineRef.current, {
        x,
        width,
        duration: 0,
      });
    }
  }, [activeSection]);

  useEffect(() => {
    if (!hasAnimatedSocials) return;

    if (activeSection === "contact") {
      const reversed = [...socialsRefs.current].reverse();

      gsap.to(reversed, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        pointerEvents: "none",
      });
    } else {
      gsap.to(socialsRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    }
  }, [activeSection, hasAnimatedSocials]);

  useEffect(() => {
    if (!hasAnimatedControls) return;
    if (activeSection === "home") {
      gsap.to(controlButtonsRefs.current[1], {
        opacity: 0,
        y: 75,
        duration: 0.7,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(controlButtonsRefs.current[1], {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    }
  }, [activeSection, hasAnimatedControls]);

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`w-full fixed top-0 z-50 transition-bg duration-300 opacity-0 ${
          scrolled || isOpen ? "bg-white dark:bg-black" : ""
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Favicon/Logo */}
          <button
            ref={faviconRef}
            onClick={() => {
              setIsOpen(false);
              const section = document.getElementById("home");
              if (section) {
                section.scrollIntoView();
                history.pushState(null, null, "#home");
              }
            }}
            aria-label="Go to home section"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
            onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
            onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
          >
            <img
              src="favicon.ico"
              alt="Logo"
              className="w-8 h-8 hidden dark:block"
            />

            <img
              src="faviconblack.ico"
              alt="Logo"
              className="w-8 h-8 block dark:hidden"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 relative">
            {sections.map((section, i) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                ref={(el) => (linkRefs.current[i] = el)}
                className="font-medium cursor-pointer inline-block relative z-10"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
                onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
              >
                {section}
              </a>
            ))}
            {/* Animated Underline */}
            <div
              ref={underlineRef}
              className={`absolute -bottom-5 h-[4px] bg-black dark:bg-white transition-all duration-300 w-0 translate-x-0 ${
                activeSection === "home" ? "opacity-0" : ""
              }`}
            />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50">
            <button
              className="relative w-8 h-6"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`absolute w-8 h-0.5 bg-black dark:bg-white left-0 top-1 transition-all duration-300 ${
                  isOpen ? "rotate-45 top-5" : ""
                }`}
              />
              <span
                className={`absolute w-8 h-0.5 bg-black dark:bg-white left-0 top-3 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute w-8 h-0.5 bg-black dark:bg-white left-0 top-5 transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden z-50 bg-white dark:bg-black backdrop-blur-md overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4 px-6 top-12" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Socials */}
      <div className="fixed bottom-3 left-3 lg:bottom-5 lg:left-5 z-40 flex flex-col gap-2 sm:gap-3">
        <a
          ref={(el) => (socialsRefs.current[2] = el)}
          href="mailto:joshuakitong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors duration-300 backdrop-blur-sm opacity-0"
        >
          <Mail size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
        <a
          ref={(el) => (socialsRefs.current[1] = el)}
          href="https://github.com/joshuakitong"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors duration-300 backdrop-blur-sm opacity-0"
        >
          <Github size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
        <a
          ref={(el) => (socialsRefs.current[0] = el)}
          href="https://www.linkedin.com/in/joshua-christopher-kitong-65805a2a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors duration-300 backdrop-blur-sm opacity-0"
        >
          <Linkedin size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </a>
      </div>

      {/* Toggle Dark Theme + Scroll to Top */}
      <div className="fixed bottom-3 right-3 lg:bottom-5 lg:right-5 z-40 flex flex-col items-end gap-2 sm:gap-3">
        <button
          ref={(el) => (controlButtonsRefs.current[1] = el)}
          onClick={() => {
            const home = document.getElementById("home");
            if (home) home.scrollIntoView({ behavior: "smooth" });
            history.pushState(null, null, "#home");
          }}
          className="bg-white/80 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors duration-300 backdrop-blur-sm opacity-0"
        >
          <ChevronsUp size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
        </button>
        <button
          ref={(el) => (controlButtonsRefs.current[0] = el)}
          onClick={() => setIsDark(!isDark)}
          className="bg-white/80 dark:bg-white/5 border border-black/15 dark:border-white/10 hover:bg-blue-500 hover:shadow-[0_0_8px_0_rgba(59,130,246,0.15)] rounded-full p-3 transition-colors duration-300 backdrop-blur-sm opacity-0"
        >
          {isDark ? (
            <Moon size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
          ) : (
            <Sun size="100%" className="w-3 h-3 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>
    </>
  );
}
