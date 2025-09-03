import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from './ReviewCard';

const reviews = [
  {
    content: 'Analisis datanya tajam dan langsung aplikatif. Sangat membantu dalam pengambilan keputusan.',
    name: 'Sophia Lestari',
    imgSrc: '/images/people-1.jpg',
    company: 'DataPrisma'
  },
  {
    content: 'Model yang dibangun tepat sasaran dan mudah diimplementasikan di lapangan.',
    name: 'Ethan Prasetyo',
    imgSrc: '/images/people-2.jpg',
    company: 'Inovasi Cerdas'
  },
  {
    content: 'Tim yang profesional dan teliti. Hasil analisis sangat relevan dengan kebutuhan kami.',
    name: 'Mahendra',
    imgSrc: '/images/people-3.jpg',
    company: 'Solusi Statistika'
  },
  {
    content: 'EraNusaData menyederhanakan data kompleks jadi insight yang mudah dipahami.',
    name: 'Noah Rahman',
    imgSrc: '/images/people-4.jpg',
    company: 'InsightPro'
  },
  {
    content: 'Pendekatan inovatif dan sangat membantu dalam transformasi digital kami.',
    name: 'Ava Nuraini',
    imgSrc: '/images/people-5.jpg',
    company: 'TechMitra'
  },
  {
    content: 'Solusi datanya efisien dan aplikatif. Sangat direkomendasikan!',
    name: 'Taufik',
    imgSrc: '/images/people-6.jpg',
    company: 'SigmaNet'
  }

];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end:'400% 80%',
        scrub: true
      },
      x: '-1000',
    });
  });
  
  return (
    <section 
      id='reviews'
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          What our customers say
        </h2>
        <div className="scrub-slide flex place-items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company}, key) => (
            <ReviewCard 
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review