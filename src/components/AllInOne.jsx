import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


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
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Advanced Data Pipeline Optimization.
              </li>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  System Integration Expertise.
              </li>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Data modeling
              </li>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Data Quality Assurance.
              </li>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Unparalleled Insights for Informed Decision-Making.
              </li> 
              </p>
            </div>
          </div>
          <div className='flex'>
          
            <div>
            <Link to = '/generative-ai' target='_blank'>
              <h3 className='text-indigo-600 font-bold text-lg'>Generative AI</h3>
            </Link>
              <p className='text-lg pt-2 pb-4'>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Tailored Generative AI Models.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Custom Model Development Expertise.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Optimization for Enhanced Performance.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Innovation at the Core.
              </li> 
              </p>
            </div>
          </div>
          <div className='flex'>
          
            <div>
             <Link to= '/analytics' target='_blank'>
               <h3 className='text-indigo-600 font-bold text-lg'>Data Analytics</h3>
              </Link>
              <p className='text-lg pt-2 pb-4'>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Comprehensive Analytics Services.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Actionable Insights and Predictive Models.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Data-Driven Strategies for Growth.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Dashboard Development.
              </li> 
              </p>
            </div>
          </div>
          <div className='flex'>
           
            <div>
            <Link to = '/data-science' target='_blank'>
              <h3 className='text-indigo-600 font-bold text-lg'>Data Science and AI solutions</h3>
            </Link>
              <p className='text-lg pt-2 pb-4'>
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Strategic Data Science Services.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Advanced ML and AI Deployment.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Measurable Success for Complex Goals.
              </li> 
              <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Data-Driven Frameworks for Impactful Analytics.
              </li>
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
