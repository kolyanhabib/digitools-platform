import BannerImage from "../assets/banner.png";
import { FaPlay, FaCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#e1e7ff] text-purple-600 px-4 py-1 rounded-full text-sm mb-6">
            <FaCircle className="text-purple-500 text-xs" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 mt-6 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <button className="px-6 py-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-full font-semibold shadow-md hover:opacity-90 transition cursor-pointer">
              Explore Products
            </button>

            <button className="px-6 py-3 border border-purple-400 text-purple-600 rounded-full font-semibold flex items-center gap-2 hover:bg-linear-to-r from-purple-500 to-indigo-500 hover:text-white transition cursor-pointer">
              <FaPlay className="text-sm" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={BannerImage}
            alt="AI Workflow"
            className="rounded-xl shadow-md w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
