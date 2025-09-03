import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */

const ContributionCarousel = () => {
    const logos = [
      "/images/Project/statcore.png",
      "/images/Project/sinta4.png",
      "/images/Project/lebesgue.png",
      "/images/Project/sensus penduduk.png",
      "/images/Project/perumahan dan kawasan permukiman.png",
      "/images/Project/haki.png",
      "/images/Project/enthusiastic.png",
      "/images/Project/clinisindo.png",
      "/images/Project/dokter data.png",
      "/images/Project/asdos ipb.png",
      "/images/Project/asdos untad.png",
      "/images/Project/brm fmipa untad.jpeg",
      "/images/Project/bps palu.png",
      "/images/Project/jamkrindo.png",
      "/images/Project/Kbfmf.png",
      "/images/Project/sinta-3.png",
      "/images/rstudio.png",
      "/images/python.svg",
    ];
  
   return (
    <>
      {/* Bagian Rating */}
      <section className="rating-section">
        <div className="rating-container">
          <h2 className="rating-title">Outstanding Ratings for Our Work</h2>
          <div className="rating-items">
            <div className="rating-item">
              <h3 className="rating-source">Clients' Feedback</h3>
              <div className="rating-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="rating-detail">4.95 Ratings</p>
            </div>
            <div className="rating-item">
              <h3 className="rating-source">Trusted Collaborators</h3>
              <div className="rating-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className="rating-detail">4.90 Ratings</p>
            </div>
            <div className="rating-item">
              <h3 className="rating-source">Global Recognition</h3>
              <div className="rating-stars" aria-label="4.5 out of 5 stars">
                ★★★★☆
              </div>
              <p className="rating-detail">4.80 Ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Carousel */}
      <section className="carousel-section">
        <h2 className="carousel-title">Our Contributions and Collaborations</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            {logos.map((logo, index) => (
              <div className="carousel-item" key={index}>
                <img src={logo} alt={`Project logo ${index + 1}`} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div className="carousel-item" key={`dup-${index}`}>
                <img src={logo} alt={`Duplicate project logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Apresiasi */}
      <section className="appreciation-section">
        <h2 className="appreciation-title">
          Celebrating Our Practitioners and Collaborations
        </h2>
        <p className="appreciation-description">
          We extend our heartfelt gratitude to our dedicated practitioners and
          collaborators. Their unwavering support drives our mission to
          innovate, inspire, and make a meaningful impact in every project we
          undertake.
        </p>
      </section>
    </>
  );
};

export default ContributionCarousel;
