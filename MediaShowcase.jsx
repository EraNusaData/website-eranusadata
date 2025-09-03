import React from 'react';

const MediaShowcase = () => {
  return (
    <section className="section bg-zinc-900 text-white reveal-up">
      <div className="container flex flex-col items-center text-center">

        {/* Heading Tengah */}
        <h2 className="headline-1 text-white mb-16 max-w-3xl">
          Where Numbers Find Their Voice
        </h2>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full items-center justify-items-center">

          {/* Kiri: YouTube */}
          <div className="w-full max-w-md mx-auto">
            <div className="group aspect-video w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-sky-400/30">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bfiyV_7wDLU"
                title="Era Nusa Data Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Tengah: Text */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <p className="text-zinc-400 text-base max-w-md">
                Temukan insight terbaru dari Era Nusa Data melalui 
                video inspiratif di <strong>YouTube</strong> dan podcast <strong>Suara Data</strong> di 
                <strong>Spotify</strong>. Sajian konten edukatif seputar data, teknologi, dan masa depan digital yang relevan dan aplikatif.
                Serta membahas penerapan <strong>deep learning</strong>, <strong>machine learning</strong>, dan <strong>statistik</strong> dalam membangun solusi berbasis data yang aplikatif dan relevan.

            </p>
          </div>

          {/* Kanan: Gambar Podcast Bisa Diklik */}
          <a 
            href="https://open.spotify.com/show/6qeQ2QgBMKGE8CQwDi8gCK"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-green-400/30"
          >
            <img 
              src="/images/spotfyklik.png" 
              alt="Suara Data Podcast" 
              className="w-full h-auto object-cover group-hover:brightness-110 transition duration-300"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
