"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import image from "../public/profile.png";
import stockit from "../public/stockit.png";
import shortsentinel from "../public/shortsentinel.png";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const tabs = [
    { id: "about", label: "portfolio.tsx" },
    // Only one tab for About/Portfolio
  ];
  // Remove scroll spy and activeTab logic
  const handleTabClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1b26] text-[#c0caf5] font-mono">
      {/* Terminal Tab Bar */}
      <div
        className="terminal-tabbar overflow-x-auto whitespace-nowrap text-xs sm:text-base flex gap-2 sm:gap-4 px-2 sm:px-4 hidden md:flex"
        role="tablist"
        aria-label="Section navigation"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-controls={tab.id}
            tabIndex={0}
            onClick={() => handleTabClick(tab.id)}
            className={`terminal-tab cursor-pointer px-3 py-1 min-w-[100px] sm:min-w-[120px]`}
            style={{ outline: "none" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* NAVBAR */}
      <nav className="w-full border-b border-[#7aa2f7] bg-[#16161e] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex items-center justify-between h-12 sm:h-14 relative">
          <div className="flex items-center gap-2">
            <Image src={image} alt="Logo" width={28} height={28} className="rounded-full border border-[#7aa2f7]" />
            <span className="font-bold text-sm sm:text-base text-[#7aa2f7]">Vaibhav Talkhande</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 sm:gap-8 text-[#c0caf5] font-medium text-xs sm:text-base">
            <a href="#about" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>About</a>
            <a href="#projects" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>Projects</a>
            <a href="#experience" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>Experience</a>
            <a href="#tech" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>Tech Stack</a>
            <a href="#education" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>Education</a>
            <a href="#achievements" className="hover:text-[#9ece6a] transition cursor-pointer" onClick={() => setNavOpen(false)}>Achievements</a>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center px-3 py-2 focus:outline-none"
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="w-7 h-7 text-[#7aa2f7] transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
                // X icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <>
                  <line x1="4" y1="7" x2="20" y2="7" strokeWidth={2} strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeWidth={2} strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" strokeWidth={2} strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
          {/* Mobile Nav Dropdown */}
          {navOpen && (
            <div className="absolute top-12 left-0 w-full bg-[#16161e] border-b border-[#7aa2f7] flex flex-col items-center gap-2 py-4 z-50 animate-fade-in">
              <a href="#about" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>About</a>
              <a href="#projects" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Projects</a>
              <a href="#experience" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Experience</a>
              <a href="#tech" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Tech Stack</a>
              <a href="#education" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Education</a>
              <a href="#achievements" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Achievements</a>
              <a href="#contact" className="py-2 w-full text-center hover:text-[#9ece6a] transition" onClick={() => setNavOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* HERO SECTION */}
        <section className="terminal-section flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-16 mb-10 md:mb-14 terminal-border">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-[#9ece6a] flex items-center justify-center md:justify-start">Vaibhav Talkhande <span className="terminal-cursor" /></h1>
            <p className="text-base sm:text-lg md:text-xl text-[#bb9af7] mb-4">🚀 Full-stack Developer | MERN Stack | Next.js</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-4">
              <a href="mailto:vaibhavtalkhande41@gmail.com" className="px-3 sm:px-4 py-2 border border-[#7aa2f7] text-[#7aa2f7] hover:bg-[#16161e] transition rounded text-xs sm:text-sm">Email</a>
              <a href="https://www.linkedin.com/in/vaibhavtalkhande/" target="_blank" rel="noopener noreferrer" className="px-3 sm:px-4 py-2 border border-[#7aa2f7] text-[#7aa2f7] hover:bg-[#16161e] transition rounded text-xs sm:text-sm">LinkedIn</a>
              <a href="https://github.com/VaibhavTalkhande" target="_blank" rel="noopener noreferrer" className="px-3 sm:px-4 py-2 border border-[#7aa2f7] text-[#7aa2f7] hover:bg-[#16161e] transition rounded text-xs sm:text-sm">GitHub</a>
              <a href="tel:+919325625918" className="px-3 sm:px-4 py-2 border border-[#7aa2f7] text-[#7aa2f7] hover:bg-[#16161e] transition rounded text-xs sm:text-sm">+91-9325625918</a>
            </div>
          </div>
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Image src={image} alt="Profile photo" width={90} height={90} className="rounded border-2 border-[#7aa2f7] object-cover w-[90px] h-[90px] sm:w-[120px] sm:h-[120px]" priority />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-2 text-[#e0af68]">About Me</h2>
          <p className="text-[#c0caf5] text-sm sm:text-base leading-relaxed">Software developer with hands-on experience building full-stack web applications. Skilled in MERN Stack, Next.js, and integrating third-party APIs. Deployed multiple apps with backends and responsive UI.</p>
        </section>

        {/* PROJECTS SECTION (moved up) */}
        <section id="projects" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">My Personal Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#16161e] border border-[#565f89] rounded p-4 sm:p-5 flex flex-col gap-2">
              <Image src={stockit} alt="Stockit Project Screenshot" width={320} height={180} className="rounded object-cover border border-[#565f89] w-full mb-2" />
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2 text-[#7aa2f7]">🔹 <a href="https://github.com/VaibhavTalkhande/stockit" target="_blank" rel="noopener noreferrer" className="hover:underline">Stockit</a></h3>
              <span className="text-xs text-[#e0af68]">Retail Management System</span>
              <p className="text-xs sm:text-sm text-[#c0caf5]">Inventory, sales, billing, payment gateway, analytics & Gemini-powered AI insights</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Next.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">MongoDB</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Electron.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Stripe</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Node.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Express</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/VaibhavTalkhande/stockit" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#bb9af7] text-[#bb9af7] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">GitHub</a>
                <a href="https://stockit-wine.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#9ece6a] text-[#9ece6a] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">Live</a>
              </div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-4 sm:p-5 flex flex-col gap-2">
              <Image
                src="/shortsenital.png"
                alt="ShortSentinel Project Screenshot"
                width={320}
                height={180}
                className="rounded object-cover border border-[#565f89] w-full mb-2 "
              />
              <h3 className="font-semibold text-base sm:text-lg flex items-center gap-2 text-[#7aa2f7]">🔹 <a href="https://github.com/VaibhavTalkhande/shortsentinel" target="_blank" rel="noopener noreferrer" className="hover:underline">ShortSentinel</a></h3>
              <span className="text-xs text-[#e0af68]">Secure URL Shortener</span>
              <p className="text-xs sm:text-sm text-[#c0caf5]">URL analytics, geolocation tracking, exports, real-time graphs, dashboard, and more.</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">React</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Tailwind</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">PostgreSQL</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Prisma</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Socket.io</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Electron.js</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/VaibhavTalkhande/shortsentinel" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#bb9af7] text-[#bb9af7] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">GitHub</a>
                <a href="https://shortsentinel-1.onrender.com" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#9ece6a] text-[#9ece6a] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">Live</a>
              </div>
            </div>
          </div>
        </section>

        {/* My Work SECTION */}
        {/* <section className="terminal-section terminal-border mb-10 md:mb-12">

          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">My Work</h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <Image src={stockit} alt="Stockit Project Screenshot" width={320} height={180} className="rounded object-cover border border-[#565f89] w-full max-w-xs md:max-w-[320px]" />
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-base sm:text-lg mb-1 text-[#7aa2f7]">Stockit</h3>
              <p className="text-[#c0caf5] mb-2 text-sm sm:text-base">Retail Management System: Inventory, sales, billing, payment gateway, analytics & Gemini-powered AI insights.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Next.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">MongoDB</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Electron.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Stripe</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Node.js</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Express</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/VaibhavTalkhande/stockit" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#bb9af7] text-[#bb9af7] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">GitHub</a>
                <a href="https://stockit-wine.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#9ece6a] text-[#9ece6a] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">Live</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center mt-8">
            <Image
              src="/shortsenital.png"
              alt="ShortSentinel Project Screenshot"
              width={320}
              height={180}
              className="rounded object-cover border border-[#565f89] w-full max-w-xs md:max-w-[320px]"
            />
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-base sm:text-lg mb-1 text-[#7aa2f7]">ShortSentinel</h3>
              <p className="text-[#c0caf5] mb-2 text-sm sm:text-base">Secure URL Shortener with realtime analytics and dashboard.</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">React</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Tailwind</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">PostgreSQL</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Prisma</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Socket.io</span>
                <span className="terminal-highlight text-xs px-2 py-0.5 rounded">Electron.js</span>
              </div>
              <div className="flex gap-2 mt-2">
                <a href="https://github.com/VaibhavTalkhande/shortsentinel" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#bb9af7] text-[#bb9af7] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">GitHub</a>
                <a href="https://shortsentinel.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border border-[#9ece6a] text-[#9ece6a] hover:bg-[#24283b] transition rounded text-xs sm:text-sm">Live</a>
              </div>
            </div>
          </div>
        </section> */}

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">Experience</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <span className="font-semibold text-base sm:text-lg text-[#7aa2f7]">Web Developer Intern</span>
                <span className="ml-2 text-xs sm:text-sm bg-[#16161e] text-[#e0af68] px-2 py-0.5 rounded">QuickFusion Innovations</span>
              </div>
              <span className="text-xs sm:text-sm text-[#565f89] mt-1 md:mt-0">Jan 2025 – Feb 2025</span>
            </div>
            <ul className="list-disc list-inside text-[#c0caf5] text-xs sm:text-sm space-y-1 ml-4">
              <li>Developed 2+ responsive client websites using <b>React.js</b> and <b>Tailwind CSS</b></li>
              <li>Revamped UI/UX for faster load time and better SEO</li>
              <li>Delivered site that helped company attract clients</li>
            </ul>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="tech" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-[#16161e] border border-[#565f89] rounded p-3 sm:p-4">
              <div className="font-semibold mb-1 text-[#bb9af7]">Languages</div>
              <div className="flex flex-wrap gap-2"> <span className="terminal-accent px-2 py-0.5 rounded">JavaScript</span> <span className="terminal-accent px-2 py-0.5 rounded">TypeScript</span> <span className="terminal-accent px-2 py-0.5 rounded">Java</span> </div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-3 sm:p-4">
              <div className="font-semibold mb-1 text-[#bb9af7]">Frontend</div>
              <div className="flex flex-wrap gap-2"> <span className="terminal-accent px-2 py-0.5 rounded">Next.js</span> <span className="terminal-accent px-2 py-0.5 rounded">React.js</span> <span className="terminal-accent px-2 py-0.5 rounded">Redux</span> <span className="terminal-accent px-2 py-0.5 rounded">Tailwind CSS</span> <span className="terminal-accent px-2 py-0.5 rounded">Material-UI</span> <span className="terminal-accent px-2 py-0.5 rounded">shadcn/ui</span> <span className="terminal-accent px-2 py-0.5 rounded">HTML</span> <span className="terminal-accent px-2 py-0.5 rounded">CSS</span> </div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-3 sm:p-4">
              <div className="font-semibold mb-1 text-[#bb9af7]">Backend</div>
              <div className="flex flex-wrap gap-2"> <span className="terminal-accent px-2 py-0.5 rounded">Node.js</span> <span className="terminal-accent px-2 py-0.5 rounded">Express.js</span> <span className="terminal-accent px-2 py-0.5 rounded">Prisma</span> <span className="terminal-accent px-2 py-0.5 rounded">Zod</span> </div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-3 sm:p-4">
              <div className="font-semibold mb-1 text-[#bb9af7]">Database</div>
              <div className="flex flex-wrap gap-2"> <span className="terminal-accent px-2 py-0.5 rounded">MongoDB</span> <span className="terminal-accent px-2 py-0.5 rounded">PostgreSQL</span> <span className="terminal-accent px-2 py-0.5 rounded">SQL</span> </div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-3 sm:p-4">
              <div className="font-semibold mb-1 text-[#bb9af7]">Other Tools</div>
              <div className="flex flex-wrap gap-2"> <span className="terminal-accent px-2 py-0.5 rounded">Docker</span> <span className="terminal-accent px-2 py-0.5 rounded">Git</span> <span className="terminal-accent px-2 py-0.5 rounded">Postman</span> <span className="terminal-accent px-2 py-0.5 rounded">Linux</span> </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS & CLUBS SECTION */}
        <section id="achievements" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">Achievements & Clubs</h2>
          <div className="flex flex-col gap-2">
            <ul className="list-disc list-inside text-[#c0caf5] text-xs sm:text-sm space-y-2">
              <li><b className="text-[#bb9af7]">Technical Head</b>, GFG GHRCEMN Club<br/>Built & maintained club website using React, led technical events</li>
              <li><b className="text-[#bb9af7]">Web Developer</b>, GDSC GHRIET<br/>Worked on club website using React + TypeScript</li>
            </ul>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="terminal-section terminal-border mb-10 md:mb-12 scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">Education</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-[#16161e] border border-[#565f89] rounded p-4 sm:p-5 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-[#bb9af7] text-sm sm:text-base">GH Raisoni College of Engineering, Nagpur</span>
                <span className="text-xs sm:text-sm text-[#565f89] mt-1 sm:mt-0">2022–2026</span>
              </div>
              <div className="text-[#c0caf5] text-xs sm:text-sm">B.Tech in Computer Science <span className="ml-2 font-semibold text-[#e0af68]">CGPA: 8.88</span></div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-4 sm:p-5 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-[#bb9af7] text-sm sm:text-base">The Royal Gondwana Public School, Nagpur</span>
                <span className="text-xs sm:text-sm text-[#565f89] mt-1 sm:mt-0">2020–2021</span>
              </div>
              <div className="text-[#c0caf5] text-xs sm:text-sm">CBSE 12th – 86.6%</div>
            </div>
            <div className="bg-[#16161e] border border-[#565f89] rounded p-4 sm:p-5 flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-[#bb9af7] text-sm sm:text-base">Vimaltai Tidke Convent Atrey Layout, Nagpur</span>
                <span className="text-xs sm:text-sm text-[#565f89] mt-1 sm:mt-0">2018–2019</span>
              </div>
              <div className="text-[#c0caf5] text-xs sm:text-sm">CBSE 10th – 90%</div>
            </div>
          </div>
        </section>

        {/* GITHUB STATS SECTION */}
        <section id="contact" className="terminal-section terminal-border mb-8 text-center scroll-mt-20">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#e0af68]">GitHub Stats</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <img src="https://github-readme-stats.vercel.app/api?username=VaibhavTalkhande&theme=radical&hide_border=false&include_all_commits=true&count_private=true" width="340" alt="GitHub Stats" className="rounded shadow w-full max-w-xs sm:max-w-sm md:max-w-md" />
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=VaibhavTalkhande&theme=radical&hide_border=false" width="340" alt="GitHub Streak" className="rounded shadow w-full max-w-xs sm:max-w-sm md:max-w-md" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=VaibhavTalkhande&theme=radical&layout=compact&hide_border=false" width="340" alt="Top Languages" className="rounded shadow w-full max-w-xs sm:max-w-sm md:max-w-md" />
            <img src="https://github-profile-trophy.vercel.app/?username=VaibhavTalkhande&theme=radical&margin-w=5" width="340" alt="Trophies" className="rounded shadow w-full max-w-xs sm:max-w-sm md:max-w-md" />
          </div>
        </section>
      </main>
      


      {/* FOOTER */}
      <footer className="w-full bg-[#16161e] border-t border-[#7aa2f7] py-4 sm:py-6 mt-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-[#565f89] text-xs sm:text-sm">
          <span>© {new Date().getFullYear()} Vaibhav Talkhande.</span>
          <span>vaibhavtalkhande41@gmail.com</span>
        </div>
      </footer>
      {/* Add global style for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
