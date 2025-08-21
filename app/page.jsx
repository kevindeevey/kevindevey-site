'use client';
import React, { useEffect, useState } from 'react';
// if you already import React, just add useEffect and useState

export default function LandingPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setLightbox({ open: false, src: '', alt: '' });
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });


  
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:kevin@kevindeeveyarchitect.com';
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/dv[ux]-logo.png" alt="dvux logo" className="h-10 w-auto object-contain" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Recent Work</a>
            <a href="#engagement" className="hover:text-gray-900">Engagement</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-700">Let’s talk</a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wide text-xs text-gray-500">Consulting • Fractional leadership • Product delivery</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold leading-tight">Design Strategist & Product Design Leader</h1>
            <p className="mt-5 text-lg md:text-xl text-gray-700">
              I transform complex problems into simple, scalable digital experiences—blending hands-on product design with executive-level strategy. Available for consulting, fractional leadership, audits, and end-to-end delivery.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl px-5 py-3 bg-gray-900 text-white font-medium hover:bg-gray-700">Start a conversation</a>
              <a href="https://www.linkedin.com/in/kevin-deevey-4620721/" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-600 text-gray-900">LinkedIn</a>
              <a href="#services" className="rounded-2xl px-5 py-3 border border-gray-300 hover:border-gray-600 text-gray-900">Explore services</a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-3 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            {/*<p className="mt-2 text-gray-600 text-sm">Strategy-first with hands-on execution</p>*/}
            <img src="/IMG_6640-2.png" alt="Kevin Deevey portrait" className="mt-6 rounded-xl shadow-md" />
          </div>
          <div className="md:col-span-2 leading-relaxed space-y-4 text-gray-800">
            <p>
              I am a senior design leader, strategist, and product designer specializing in transforming complex challenges into simple, scalable, and high-impact digital experiences. With deep experience in <strong>design strategy</strong>, <strong>digital transformation</strong>, and <strong>product design leadership</strong>, I’ve led multi-year initiatives in healthcare, finance, and enterprise platforms—shaping product vision, aligning stakeholders, and delivering measurable results.
            </p>
            <p>
              I excel where design must demonstrate strategic value—facilitating change management, driving cross-functional collaboration, and ensuring solutions are human-centered, business-aligned, and operationally feasible. Alongside leadership, I provide <strong>hands-on product design</strong> in UX, UI, and service design—bridging vision and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Design Strategy</h3>
              <p className="mt-3 text-sm text-gray-700">Aligning user needs with business goals through strategic planning, research, and facilitation.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Product Design</h3>
              <p className="mt-3 text-sm text-gray-700">Hands-on UX/UI design from discovery to delivery, creating usable and beautiful interfaces.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Leadership & Coaching</h3>
              <p className="mt-3 text-sm text-gray-700">Fractional leadership, team building, and mentoring to elevate in-house design capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
<section id="work" className="bg-gray-50 border-b border-gray-100">
  <div className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-semibold">Most Recent Work</h2>
    <p className="mt-4 text-gray-700 max-w-3xl">
      A showcase of recent projects and engagements that highlight my approach to design strategy, leadership, and delivery.
    </p>

    <div className="mt-8 grid md:grid-cols-2 gap-6">
      {/* CVS Healthspire */}
      <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <button
          type="button"
          onClick={() => openLightbox('/CVS-thumb.png', 'CVS Healthspire — MyActiveHealth')}
          className="w-full"
          aria-label="Open CVS Healthspire thumbnail in lightbox"
        >
          <img
            src="/CVS-thumb.png"
            alt="CVS Healthspire project thumbnail"
            className="w-full h-56 object-cover cursor-zoom-in"
          />
        </button>
        <div className="p-6">
          <h3 className="text-lg font-medium">CVS Healthspire — MyActiveHealth Platform</h3>
          <p className="mt-3 text-sm text-gray-700">
            Led a multi-year UX transformation of the MyActiveHealth platform, modernizing the experience, integrating behavioral design, and aligning
            with engagement goals across mobile and web.
          </p>
          {/*<a href="#" className="inline-block mt-4 text-sm font-medium text-gray-900 hover:underline">
            Read more →
          </a>*/}
        </div>
      </article>

      {/* Alberta Courts */}
      <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <button
          type="button"
          onClick={() => openLightbox('/alberta-thumb.png', 'Alberta Courts — Court of King’s Bench')}
          className="w-full"
          aria-label="Open Alberta Courts thumbnail in lightbox"
        >
          <img
            src="/alberta-thumb.png"
            alt="Alberta Courts project thumbnail"
            className="w-full h-56 object-cover cursor-zoom-in"
          />
        </button>
        <div className="p-6">
          <h3 className="text-lg font-medium">Alberta Courts — Court of King’s Bench</h3>
          <p className="mt-3 text-sm text-gray-700">
            Year-long service design engagement delivering a modernized Civil Commercial court design; optimized workflows for counsel, coordinators,
            clerks, and judicial assistants following an intensive systems audit.
          </p>
          {/*<a href="#" className="inline-block mt-4 text-sm font-medium text-gray-900 hover:underline">
            Read more →
          </a>*/}
        </div>
      </article>
    </div>
  </div>
</section>




      {/* Engagement Models */}
      <section id="engagement" className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Engagement Models</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Consulting</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Strategy sprints</li>
                <li>Org & product audits</li>
                <li>Roadmap definition</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">Fractional Leadership</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Interim Head of Design</li>
                <li>Team coaching & hiring</li>
                <li>Ways-of-working</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
              <h3 className="text-lg font-medium">End-to-End Delivery</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Discovery → MVP</li>
                <li>Prototyping & testing</li>
                <li>Design systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
{lightbox.open && (
  <div
    className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    aria-label={lightbox.alt || 'Image preview'}
    onClick={closeLightbox}
  >
    <div
      className="relative max-w-[90vw] max-h-[85vh]"
      onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking image/container
    >
      <button
        type="button"
        onClick={closeLightbox}
        className="absolute -top-10 right-0 text-white/90 hover:text-white text-sm font-medium underline"
        aria-label="Close image preview"
      >
        Close (Esc)
      </button>
      <img
        src={lightbox.src}
        alt={lightbox.alt || ''}
        className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
      />
    </div>
  </div>
)}


      {/* Contact */}
      <section id="contact" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">contact</h2>
          <form className="grid gap-3 mt-8" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" required />
            <input type="email" placeholder="Your email" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" required />
            <textarea placeholder="Your message" className="border border-gray-300 rounded-lg px-4 py-3 text-sm" rows="5" required></textarea>
            <button type="submit" className="rounded-2xl px-5 py-3 bg-gray-900 text-white font-medium hover:bg-gray-700">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
<footer className="border-t border-gray-100">
  <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
    
    {/* Contact Info */}
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <span>📞 <a href="tel:+11234567890" className="hover:text-gray-900">+1 (613) 797-5689</a></span>
      <span>✉️ <a href="mailto:kevin@kevindeeveyarchitect.com" className="hover:text-gray-900">kevin@kevindeeveyarchitect.com</a></span>
    </div>

    {/* Navigation Links */}
    <nav className="flex gap-4">
      <a href="#services" className="hover:text-gray-900">Services</a>
      <a href="#work" className="hover:text-gray-900">Recent Work</a>
      <a href="#engagement" className="hover:text-gray-900">Engagement</a>
      <a href="#contact" className="hover:text-gray-900">Contact</a>
    </nav>

    {/* Social Icons */}
    <div className="flex items-center gap-3">
      <a
        href="https://www.linkedin.com/in/kevin-deevey-4620721/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.994 20.452H3.679V9h3.315v11.452z" />
        </svg>
      </a>
    </div>

  </div>
</footer>

    </div>
  );
}
