import React from 'react';

/**
 * @copyright
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="pt-28 lg:pt-36 bg-hero bg-cover bg-center"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        
        {/* Kolom Kiri: Tulisan dan Status */}
        <div>
        {/* Avatar and Status */}
        <div className="flex items-center gap-3">
          <figure className="img-box w-9 h-9 rounded-lg">
            <img 
              src="/images/Rahman.jpg" 
              width={40}
              height={40}
              alt="Abede Potrait"
              className="img-cover"
            />
          </figure>
          <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
            Available for work
          </div>
        </div>

        {/* Heading */}
        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Shaping The Future, Driven by Data Insights
        </h2>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://www.linkedin.com/in/eranusadata"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
          >
            {/* ikon LinkedIn */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                      2.239 5 5 5h14c2.761 0 5-2.239 
                      5-5v-14c0-2.761-2.239-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.268c-.966 
                      0-1.75-.79-1.75-1.764s.784-1.764 
                      1.75-1.764 1.75.79 
                      1.75 1.764-.784 1.764-1.75 1.764zm13.5 
                      11.268h-3v-5.604c0-1.337-.027-3.061-1.865-3.061-1.867 
                      0-2.154 1.459-2.154 
                      2.963v5.702h-3v-10h2.881v1.367h.041c.401-.76 
                      1.379-1.561 2.84-1.561 
                      3.04 0 3.6 2.001 3.6 4.601v5.593z"/>
            </svg>
            LinkedIn
          </a>
          <ButtonOutline 
            href="#about"
            label="Scroll down"
            icon="arrow_downward"
          />
          </div>
        </div>

        {/* Hero Banner */}
        <div className="hidden lg:block">
          <figure className="w-full max-w-[300px] lg:max-w-[480px] mx-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[30px] lg:rounded-[60px] overflow-hidden">
            <img 
              src="/images/hero-banner.png" 
              width={656}
              height={800}
              alt="Team Era Nusa Data" 
              className="w-full"
            />
          </figure>
        </div>

      </div>

      {/* Konten Tambahan di Area Merah */}
      <div className="absolute bottom-10 left-0 w-full text-center">
        <h3 className="text-lg font-semibold text-white">
          Welcome to Era Nusa Data
        </h3>
        <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
        Ubah data menjadi wawasan berharga dan solusi nyata. Kami hadir untuk mendukung pelajar, peneliti, 
        bisnis dan profesional dalam membangun masa depan yang lebih cerdas dengan solusi berbasis data.
        </p>
      </div>
    </section>
  );
};

export default Hero;
