import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/data_engg.json";
import {ReactComponent as Icons} from "../assets/logo_diagram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


export default class DataEngineering extends React.Component {

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
                    <h1 className="text-indigo-600 text-3xl font-bold">Data Engineering</h1>
                </div>
                <div className="flex-row align-middle justify-center font-roboto">
                    <div className="py-5 text-left text-gray-600 text-xl w-90">
                    <p className="py-2">
                        Our data engineering solutions help businesses leverage their data assets to gain valuable insights, make informed decisions, and drive innovation. We offer a range of services including data pipeline development, data warehousing, data modeling, and data governance.
                    </p>
                    <p className="py-2">
                        Our team will help you build a scalable data infrastructure, optimize data workflows, or implement real-time data processing.
                    </p>
                    </div>

                    <div className="py-5 text-left text-gray-600 text-xl w-90">
                    <h2 className="text-indigo-600 text-2xl font-bold mb-3">Offerings :</h2>
                    <ul className="list-disc pl-5 text-base">
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Connect disparate data sources, build data models for meaningful insights, and leverage artificial intelligence and security features to meet your self-service analytics needs
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Empower your analysts and business users to develop transactional, automated, and analytical solutions—without the time and effort of writing code.
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Sidestep the headaches that come with traditional development and deployment. Make your data accessible and scalable by building your data warehouse and ETL code in the cloud.
                            </li>
                            <li className="py-1 flex items-center">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                                Unify the best of data warehouses and data lakes in one simple platform to handle all your data, analytics, machine learning and AI use cases.
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="flex-1">
                <div>
                    {/* <h2 className="text-indigo-600 text-3xl font-bold my-20"> Our Tech Stack</h2> */}
                    <div className="flex-row w-200">
                        <div><Icons/></div>
                    </div>             
                </div>
                    {/* Add your image component here */}
                    {/* <div>
                        <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused}/>
                    </div> */}
                </div>
                
                
            </div>
            
        );
    }
}