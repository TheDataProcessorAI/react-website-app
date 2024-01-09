import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/data_analytics.json";

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
                        Revolutionize your business with our advanced data analytics solutions. Benefit from predictive modeling, visualization, and machine learning for actionable insights. Seamlessly integrate our user-friendly tools, simplifying complex data. Stay agile and scalable while optimizing operations. Elevate your strategy with accurate analysis for strategic growth. Experience the power of data today.
                    </p>
                    <p className="py-2">
                        Transform your business with our advanced data analytics solutions. Benefit from predictive modeling, visualization, and machine learning for actionable insights.
                    </p>
                    <p className="py-2">
                        Seamlessly integrate our user-friendly tools, simplifying complex data and staying agile and scalable.
                    </p>
                    <p className="py-2">
                        Elevate your strategy with accurate analysis, optimizing operations for strategic growth. Experience the power of data.
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
