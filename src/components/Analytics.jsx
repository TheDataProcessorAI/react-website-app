import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/data_analytics.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Analytics extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
      
    
    return (
        <div className="mt-24 px-4 justify-center items-center text-left flex">
        <div className="flex-1">
            <div className="flex-row justify-center">
                <h1 className="  text-indigo-600 text-3xl font-bold">Data Analytics Solutions</h1>
            </div>
            <div className="flex-row align-middle justify-center font-roboto">
                <div className="py-5 text-left text-gray-600 text-xl w-90">
                    <p className="py-2">
                        Revolutionize your business with our advanced data analytics solutions. Experience the power of data today.
                    </p>
                    <div className="py-5 text-left text-gray-600 text-xl w-90">
                    <h2 className="text-indigo-600 text-2xl font-bold mb-3">Our Offerings :</h2>
                    <ul className="list-disc pl-5 text-base">
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Benefit from predictive modeling, visualization, and machine learning for actionable insights.
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Seamlessly integrate our user-friendly tools, simplifying complex data.
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Unify the best of data warehouses and data lakes in one simple platform to handle all your data, analytics, machine learning and AI use cases.
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Stay agile and scalable while optimizing operations. Elevate your strategy with accurate analysis for strategic growth.
                            </li>
                        </ul>
                    </div>
    
            
                    <p className="py-2">
                    After decades immersed in the world of Business Intelligence and Data Analytics, our team has witnessed the evolution of data trends across various industries. Rely on our seasoned expertise to craft innovative data and AI solutions, ensuring you receive top-notch outcomes tailored to your specific needs. Elevate your strategic approach with precise analysis, optimizing operations for sustainable growth. Witness the transformative power of data as we work together to drive success across your business.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
        <div className="flex-1">
            {/* Add your image component here */}
            <div className="scale-125">
                <Lottie options={defaultOptions}
                        height={400}
                        width={400}
                        isStopped={this.state.isStopped}
                        isPaused={this.state.isPaused}/>
            </div>
        </div>
    </div>
     );
  };
}
