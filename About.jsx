import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 20
  },
  {
    label: 'Years of experience',
    number: 2
  }
];

const About = () => {
  return (
    <section 
      id="about"
      className="section"
    >
      <div className="container">
        <div className='bg-zinc-800/50 p-7 rounded-2xl
        md:p-12 reveal-up'>
          <p className='text-zinc-300 mb-4 md:mb-8
          md:text-xl md:max-w-[90ch] text-justify'>
          Di EraNusaData, kami percaya bahwa data adalah kunci masa depan.
          Kami membantu bisnis, organisasi, lembaga pendidikan, dan individu untuk mengubah data menjadi solusi nyata yang berdampak.
          Kami menggabungkan analitik canggih, teknologi modern, dan pendekatan inovatif, kami mendukung 
          pengambilan keputusan yang lebih cepat, tepat, dan berbasis bukti.
          Kami juga mengembangkan model berbasis data yang dapat langsung diimplementasikan di masyarakat, 
          menjawab tantangan nyata dengan solusi yang aplikatif dan bermanfaat.
          Lebih dari sekadar analisa data, kami adalah mitra strategis dalam perjalanan transformasi digital Anda — menginspirasi, mendampingi, dan menciptakan solusi yang disesuaikan dengan kebutuhan Anda.
          </p>

          <div className='flex flex-wrap items-center gap-4
          md:gap-7'>
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className='flex items-center
                  md:mb-2'>
                    <span className='text-2xl font-semibold
                    md:text-4xl'>{number}</span>
                    <span className='text-sky-400
                    font-semibold md:text-3xl'>+</span>
                  </div>
                  <p className='text-sm text-zinc-400'>{label}</p>
                </div>
              ))
            }
            <img 
            src="/images/Vector.png" 
            alt="Logo" 
            width={30}
            height={30}
            className='ml-auto md:w-[50px] md:h-[40px]'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
