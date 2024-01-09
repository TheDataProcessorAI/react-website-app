import React from 'react';
import { Link } from 'react-router-dom';


const AllInOne = () => {
  return (
    <div name='services' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-indigo-600 text-5xl font-bold text-center'>Services</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
         
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            
            <div>
              <Link to = '/data-engineering' target='_blank'>
                <h3 className='text-indigo-600 font-bold text-lg'>Data Engineering</h3>
              </Link>
              <p className='text-lg pt-2 pb-4'>
              Transform your business with cutting-edge data engineering solutions. 
              Our skilled team optimizes data pipelines, integrates systems, and ensures data quality for unparalleled insights. 
              </p>
            </div>
          </div>
          <div className='flex'>
          
            <div>
            <Link to = '/generative-ai' target='_blank'>
              <h3 className='text-indigo-600 font-bold text-lg'>Generative AI</h3>
            </Link>
              <p className='text-lg pt-2 pb-4'>
              Elevate your projects with groundbreaking Generative AI solutions. Our expert team crafts bespoke AI models for custom model development tailored to specific use cases and business requirements, optimization, and innovation.
              </p>
            </div>
          </div>
          <div className='flex'>
          
            <div>
             <Link to= '/analytics' target='_blank'>
               <h3 className='text-indigo-600 font-bold text-lg'>Data Analytics</h3>
              </Link>
              <p className='text-lg pt-2 pb-4'>
               Unlock the power of your data with our comprehensive analytics services. Gain actionable insights, predictive models, and data-driven strategies for enhanced decision-making. Maximize potential, drive growth
              </p>
            </div>
          </div>
          <div className='flex'>
           
            <div>
            <Link to = '/data-science' target='_blank'>
              <h3 className='text-indigo-600 font-bold text-lg'>Data Science and AI solutions</h3>
            </Link>
              <p className='text-lg pt-2 pb-4'>
              Empower your business with our data science services, crafting robust data strategies and deploying advanced ML and AI techniques. We unlock hidden insights, define measurable success for complex goals, and leverage data-driven frameworks for impactful analytics initiatives. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
