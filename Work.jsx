import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Prediction Performance',
    tags: ['R', 'Statistics', 'Interval'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Signature Verification',
    tags: ['Deep Learning', 'CNN'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Identity Verification',
    tags: ['MobileNetV2', 'Siamese'],
    projectLink: ''
  },
  {
    imgSrc: '/images/project-4.jpg',
    title: 'Scraping CoinMarketCap',
    tags: ['Python', 'Atlas MongoDB'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'BiCLustering',
    tags: ['R', 'Unsupervised'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Forcasting',
    tags: ['R', 'Ensemble'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];

const Work = () => {
  return (
  <section 
    id='work'
    className="section"
  >
    <div className="container">
      <h2 className="headline-2 mb-8 reveal-up">
        My portfolio highlights 
      </h2>

      <div className="grid gap-x-4 gap-y-5 grid-cols-2 sm:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
        {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
          <ProjectCard 
          key={key}
          imgSrc={imgSrc}
          title={title}
          tags={tags}
          projectLink={projectLink}
          classes="reveal-up"
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Work