import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/gen_ai.json";

export default class Generative extends React.Component {

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
                        <h1 className="  text-indigo-600 text-3xl font-bold">Generative AI Solutions</h1>
                    </div>
                    <div className="flex-row align-middle justify-center font-roboto">
                        <div className="py-5 text-left text-gray-600 text-xl w-90">
                            <p className="py-2">
                                 Embrace the future with our Gen AI services, reshaping industries with advanced capabilities. Tailored for diverse needs, our solutions offer dynamic learning, predictive modeling, and adaptability. Experience transformative AI-driven innovation, redefining operations and paving the way for unprecedented growth.
                            </p>
                            <p className="py-2">
                               Embrace predictive insights, adaptive algorithms, and scalable solutions that redefine how businesses operate. Experience a new era of efficiency and productivity.
                            </p>
                        </div>                       
                    </div>
                </div>
                <div className="flex-1">
                    {/* Add your image component here */}
                    <div>
                        <Lottie options={defaultOptions}
                                height={400}
                                width={400}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused}/>
                    </div>
                </div>
            </div>
        );
    }
}