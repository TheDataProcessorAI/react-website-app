import React from 'react';
import Lottie from "react-lottie";
import * as animationDataTpo from '../assets/tpo.json';
import * as animationDataGrowth from '../assets/growth.json';
import * as animationDataAnalytics from '../assets/analytics.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class UseCase extends React.Component{
    // Component logic goes here

    constructor(props) {
        super(props);
        this.state = { isStopped: false, isPaused: false };
      }

    render () {

        const defaultOptionsTpo = {
                    loop: true,
                    autoplay: true,
                    animationData: animationDataTpo,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                    },
                };

        const defaultOptionsGrowth = {
            loop: true,
            autoplay: true,
            animationData: animationDataGrowth,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        };

        const defaultOptionsAnalytics = {
            loop: true,
            autoplay: true,
            animationData: animationDataAnalytics,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
            },
        };
        


        return (
            <div name='services' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-indigo-600 text-5xl font-bold text-center'>Use Cases</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>
            
            </p>
    
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4'>
    
                <div className='flex'>
                
                <div>
                    
                    <div className="lg:flex-1">
                        <div>
                            <Lottie
                            options={defaultOptionsTpo}
                            height={400}
                            width={400}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}
                            />
                        </div>
                    </div>
                    <h3 className='text-indigo-600 font-bold text-lg'>Trade Promo Optimization</h3>
                    <p className='text-lg pt-2 pb-4 w-250'>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Data-Driven Budget Management.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Impact Assessment of Promotional Efforts.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Informed Planning of Promotional Activities.
                        </li>  
                    </p>
                </div>
                </div>
                <div className='flex'>
                
                <div>
                    <div className="lg:flex-1">
                        <div>
                            <Lottie
                            options={defaultOptionsGrowth}
                            height={400}
                            width={400}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}
                            />
                        </div>
                    </div>
                    <h3 className='text-indigo-600 font-bold text-lg'>Demand Forecasting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Estimating Future Demand.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Informed Decision-Making for Operations.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Anticipating Customer Demand.
                        </li>
                    </p>
                </div>
                </div>
                <div className='flex'>
                
                <div>
                <div className="lg:flex-1">
                        <div>
                            <Lottie
                            options={defaultOptionsAnalytics}
                            height={400}
                            width={400}
                            isStopped={this.state.isStopped}
                            isPaused={this.state.isPaused}
                            />
                        </div>
                    </div>
                    <h3 className='text-indigo-600 font-bold text-lg'>Retail Analytics</h3>
                    <p className='text-lg pt-2 pb-4'>
                    <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Insights into Inventory and Supply Chain.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Data-Driven Marketing and Procurement.
                        </li>
                        <li className="py-1 flex items-center">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                            Optimizing Pricing, Layout, and Promotions.
                        </li>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
};

