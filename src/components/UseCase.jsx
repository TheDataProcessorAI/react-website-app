import React from 'react';
import Lottie from "react-lottie";
import * as animationDataTpo from '../assets/tpo.json';
import * as animationDataGrowth from '../assets/growth.json';
import * as animationDataAnalytics from '../assets/analytics.json';

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
                        To optimize trade promotions, businesses can leverage data-driven processes to effectively manage promotional budgets, assess the impact of promotional efforts, and plan promotional activities. By analyzing historical data, market trends, and other relevant factors, trade promo optimization enables global enterprises to make informed decisions about promotional strategies, maximize return on investment, and drive sales growth. 
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
                        Demand forecasting is a process that involves estimating the future demand for a product or service. It helps businesses make informed decisions about production, inventory management, and resource allocation. By analyzing historical data, market trends, and other relevant factors, demand forecasting enables businesses to anticipate customer demand and plan their operations accordingly.
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
                    Retail analytics is the process of providing analytical data on inventory levels, supply chain movement, consumer demand, sales, etc. that are crucial for making marketing, and procurement decisions. The analytics on supply chain movement and consumer demand help retailers make smarter decisions on how to optimize the supply chain and stocking of inventory, and the analytics on consumer demand can be used for optimizing pricing or markdown decisions, store layout, and product promotions.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
};

