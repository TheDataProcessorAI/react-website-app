import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/data_engg.json";

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
                        <h1 className="  text-indigo-600 text-3xl font-bold">Data Engineering Solutions</h1>
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
                        <div></div>
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