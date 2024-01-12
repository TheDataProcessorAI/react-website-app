import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/data_science.json";
import { ReactComponent as Icons } from "../assets/logo_diagram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class DataScience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isStopped: false, isPaused: false };
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="mt-24 px-4 lg:justify-center lg:items-top lg:align-top text-left lg:flex">
        <div className="lg:flex-1">
          <div className="lg:flex-row lg:justify-center">
            <h1 className="text-indigo-600 text-3xl font-bold">Data Science</h1>
          </div>
          <div className="lg:flex-row lg:align-middle lg:justify-center font-roboto">
            <div className="py-5 text-left text-gray-600 text-xl w-full lg:w-90">
              <p className="py-2">
                Unlock business potential with our data science services at The Data Processor AI. Our expert team leverages cutting-edge algorithms, machine learning, and predictive analytics to extract actionable insights from your data.
              </p>
              <p className="py-2">
                Our team will help you build a scalable data infrastructure, optimize data workflows, or implement real-time data processing.
              </p>
            </div>
            <div className="py-5 text-left text-gray-600 text-xl w-full lg:w-90">
              <h2 className="text-indigo-600 text-2xl font-bold mb-3">Offerings :</h2>
              <ul className="list-disc pl-5 text-base">
                <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Turn data into visual insights with automated and interactive enterprise-grade BI platforms. Our real-time dashboards with high refresh rates are powered by robust data pipelines which ensure high-quality insights and can quickly scale with changing data requirements.
                </li>
                <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Mine large datasets for insights using statistical analysis, machine learning algorithms, and data visualization tools. These insights may be utilized to enhance business operations, optimize marketing campaigns, and create new products.
                </li>
                <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Define the supply chain analytics, predictive analytics, enabling marketers to measure and optimize marketing tactics, and more.
                </li>
                <li className="py-1 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-purple-600 mr-2" />
                  Use Artificial Intelligence for creating insights from data to explore new opportunities and stay ahead of competition.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-indigo-600 text-3xl font-bold my-20"> Our Tech Stack</h2>
              <div className="lg:flex-row w-full lg:w-200">
                <div style={{ maxWidth: "100%" }}><Icons /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-1">
          {/* Add your image component here */}
          <div>
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused} />
          </div>
        </div>
      </div>
    );
  }
}
