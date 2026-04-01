import user from "../assets/user.png";
import pack from "../assets/package.png";
import rocket from "../assets/rocket.png";

const StepsSection = () => {
  return (
    <section className="bg-[#F9FAFC] py-16 sm:py-20 px-4">
      <div className="max-w-300 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101727] mb-3">
          Get Started In 3 Steps
        </h2>

        <p className="text-[#627382] text-sm sm:text-base mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-2xl p-10 relative 
          
          shadow-sm 
          hover:shadow-md hover:-translate-y-1 
          transition duration-300 text-center"
          >
            <span
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full 
            bg-linear-to-r from-[#4f39f6] to-[#9514fa] 
            text-white text-sm font-semibold"
            >
              01
            </span>

            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
              <img src={user} alt="user" className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-semibold text-[#101727] mb-3">
              Create Account
            </h3>

            <p className="text-sm text-[#627382] leading-relaxed max-w-xs mx-auto">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-10 relative 
          
          shadow-sm 
          hover:shadow-md hover:-translate-y-1 
          transition duration-300 text-center"
          >
            <span
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full 
            bg-linear-to-r from-[#4f39f6] to-[#9514fa] 
            text-white text-sm font-semibold"
            >
              02
            </span>

            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
              <img src={pack} alt="package" className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-semibold text-[#101727] mb-3">
              Choose Products
            </h3>

            <p className="text-sm text-[#627382] leading-relaxed max-w-xs mx-auto">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div
            className="bg-white rounded-2xl p-10 relative 
           
          shadow-sm 
          hover:shadow-md hover:-translate-y-1 
          transition duration-300 text-center"
          >
            <span
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full 
            bg-linear-to-r from-[#4f39f6] to-[#9514fa] 
            text-white text-sm font-semibold"
            >
              03
            </span>

            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-100 flex items-center justify-center">
              <img src={rocket} alt="rocket" className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-semibold text-[#101727] mb-3">
              Start Creating
            </h3>

            <p className="text-sm text-[#627382] leading-relaxed max-w-xs mx-auto">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
