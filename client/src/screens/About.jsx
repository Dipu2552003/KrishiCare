import React from "react";
import content from "../utils/content";

const About = () => {
  const { aboutus } = content;
  return (
    <section id="about" className="bg-gray-100">
      <div className="md:container px-5 py-14">
        <h2
          className="title text-3xl md:text-4xl font-bold text-center mb-8"
          data-aos="fade-down"
        >
          About AgroVision
        </h2>
        <div className="flex gap-5 justify-center flex-wrap">
          <div
            data-aos="fade-up"
            className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h6 className="text-lg font-semibold my-4 text-gray-700">
                KrishiCare is a transformative platform designed to help farmers
                make informed decisions and become more self-reliant. By
                integrating advanced technology and machine learning algorithms,
                KrishiCare provides a detailed view of farming based on soil
                analysis, weather patterns, local climate, seasonal changes, and
                crop prices. This comprehensive approach enables farmers to
                select the most suitable crops for their environment and make
                strategic decisions to maximize their earnings.
              </h6>

              <h6 className="text-lg font-semibold my-4 text-gray-700">
                In addition to recommending the best crops to plant, KrishiCare
                offers forecasts for crop prices, helping farmers plan their
                planting and harvesting schedules effectively. The platform also
                includes tools for monitoring crop health and progress, allowing
                farmers to make necessary adjustments throughout the growing
                season. By equipping farmers with these insights, KrishiCare
                ensures they are well-informed and capable of managing their
                farming operations independently.
              </h6>

              <h6 className="text-lg font-semibold my-4 text-gray-700">
                KrishiCare goes beyond crop management by offering a complete
                solution that supports farmers from cultivation to sale. Farmers
                can sell their produce through the platform, while inspectors
                use advanced deep learning technology to assess crop quality and
                detect diseases through image analysis. Once the crops pass
                inspection, traders can purchase them directly. This streamlined
                process enables farmers to control their operations and income,
                ensuring a more efficient and profitable farming experience.
              </h6>

              <h6 className="text-lg font-semibold my-4 text-gray-700">
                With an easy-to-use interface, KrishiCare is designed for all
                users—farmers, inspectors, and traders. Farmers can manage their
                crops and sales, inspectors can perform quality checks, and
                traders can source high-quality produce. KrishiCare provides a
                comprehensive, user-friendly platform that supports every aspect
                of the farming process, making it a valuable resource for
                achieving greater independence and success in agriculture.
              </h6>
            </div>
 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
