import React from 'react';

/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Components
 */

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import TeamCard from './TeamCard';

const teamData = [
  {
    imgSrc: '/images/abede.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/tadulako.png', '/images/ipb.svg'],
    name: 'Abd. Rahman',
    position: 'Chief Excecutive Officer (CEO) at Eramusa Data',
    company: 'Magister Statistics and data Science, Machine Learning and Deep Learning',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/jupyter.svg', '/images/shiny.svg', '/images/sql.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/meisya.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/andalas.svg', '/images/ipb.svg'],
    name: 'Meisyatul Ilma',
    position: 'Business Strategy at Eranusa Data',
    company: 'Magister Statistics and data Science, Predictive Modeler (Prediction Interval)',
    pastCompanies: ['/images/rstudio.png', '/images/co.svg', '/images/matlab.svg', '/images/pgadmin.png', '/images/mongodb.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/dwi.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/sriwijaya.png','/images/ipb.svg'],
    name: 'Dwi Fitrianti',
    position: 'Business Strategy at Eranusa Data',
    company: 'Magister Statistics and data Science, Predictive Modeler (Data Scientist and Analyst)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/co.svg', '/images/shiny.svg', '/images/pgadmin.png', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/windy.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uinriau.png','/images/ipb.svg'],
    name: 'Windy Ayu Pratiwi',
    position: 'Product Manager at Eranusa Data',
    company: 'Magister Statistics and data Science, Predictive Modeler (Time Series Analysis)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/matlab.svg', '/images/shiny.svg', '/images/pgadmin.png', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/ade.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Scientist.png',
    rightLogo: ['/images/tadulako.png', '/images/akardaya.png'],
    name: 'Ade Hendrawan K',
    position: 'Consultant and Data Analyst at Eranusa Data',
    company: 'Sarjana Statistics, Data management and Visualization Working at PT Akar Daya Palu',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/eviews.jpg', '/images/tableau.png', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/yus.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/undip.png', '/images/ipb.svg'],
    name: 'Uswatun Hasanah',
    position: 'Lead Data Scientist at Eranusa Data',
    company: 'Magister Statistics and data Science, Big Data Analysis (Semantic Analysis)',
    pastCompanies: ['/images/rstudio.png', '/images/spss.png', '/images/co.svg', '/images/minitab.png', '/images/sas.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/monica.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uii.png', '/images/ipb.svg'],
    name: 'Monica Rahma Fauziah',
    position: 'Database Management at EraNusaData',
    company: 'Magister Statistics and data Science, Big Data Analysis (Ensemble Learning Analysis)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/sql.svg', '/images/pgadmin.png', '/images/mongodb.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/reza.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/univbengkulu.png', '/images/ipb.svg'],
    name: 'Reza Arianti',
    position: 'Research Specialist at EraNusaData',
    company: 'Magister Statistics and data Science, Spesialisasi Modelling (Pencilan, anomali, and outlier)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/co.svg', '/images/spss.png', '/images/minitab.png', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/agung.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Designer.png',
    rightLogo: ['/images/tadulako.png', '/images/plazapalu.png'],
    name: 'Agung Rifaldo',
    position: 'Data Engineer and Software Developer at EraNusaData',
    company: 'Marketing Analysis, study form Tadulako, Working at Living Plaza Palu',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/vercel.svg', '/images/co.svg', '/images/vscode.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/morina.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/tadulako.png', '/images/its.svg'],
    name: 'Morina Fathan',
    position: 'Researcher and Consultant at EraNusaData',
    company: 'Magister Statistics ITS Surabaya, Educational and Lecturer at Universitas Tadulako',
    pastCompanies: ['/images/rstudio.png', '/images/spss.png', '/images/co.svg', '/images/minitab.png', '/images/sas.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/jabbar.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Developer.png',
    rightLogo: ['/images/posindonesia.png', '/images/multipolar.webp'],
    name: 'Abd. Jabbar',
    position: 'Chief Advisory Officer (CAO) at EraNusaData',
    company: 'Credibility booster, Consultan IT Security Working at PT Multipolar Technology Tbk Jakarta',
    pastCompanies: ['/images/nodejs.svg', '/images/expressjs.svg', '/images/vscode.svg', '/images/postman.svg', '/images/apachesparkpng.png', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/caca.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/univriau.png', '/images/ipb.svg', ],
    name: 'Siti Hafsah',
    position: 'Product Manager at EraNusaData',
    company: 'Magister Statistics and data Science, Big Data (Machine Learning and Clustering)',
    pastCompanies: ['/images/rstudio.png', '/images/vscode.svg', '/images/co.svg', '/images/shiny.svg', '/images/sql.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/rahmi.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uii.png', '/images/ipb.svg'],
    name: 'Rahmi Anadra',
    position: 'Database Management at EraNusaData',
    company: 'Magister Statistics and data Science, Big Data Analysis (Semantic Analysis)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/shiny.svg', '/images/pgadmin.png', '/images/mongodb.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/rifda.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/uinsunan.png', '/images/ipb.svg'],
    name: 'Rifda Nida`ul Labibah',
    position: 'Consultant Analysis at EraNusaData',
    company: 'Magister Statistics and data Science, Big Data Analysis (Machine Learning)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/jupyter.svg', '/images/etc.png'
    ],
  },
  {
    imgSrc: '/images/risha.png',
    mainLogo: '/images/New Logo 3.png',
    roleLogo: '/images/Data Research.png',
    rightLogo: ['/images/univlampung.png', '/images/ipb.svg'],
    name: 'Ratu Risha',
    position: 'Consultant Analysis at EraNusaData',
    company: 'Magister Statistics and data Science, Predictive Modeler (Classifcation Analysis)',
    pastCompanies: ['/images/rstudio.png', '/images/python.svg', '/images/spss.png', '/images/co.svg', '/images/minitab.png', '/images/etc.png'
    ],
  },
  
];
const PractitionerSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center">Top Practitioners</h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="practitioner-swiper"
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamCard
                imgSrc={member.imgSrc}
                name={member.name}
                position={member.position}
                company={member.company}
                pastCompanies={member.pastCompanies}
                mainLogo={member.mainLogo}
                roleLogo={member.roleLogo}
                rightLogo={member.rightLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PractitionerSection;
