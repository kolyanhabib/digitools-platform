import { FaCheck } from "react-icons/fa";

const PricingSection = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-300 mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101727] mb-3">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-400 text-sm mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f2f2f2] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800">Starter</h3>
            <p className="text-sm text-gray-500 mb-4">
              Perfect for getting started
            </p>

            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-500">/Month</span>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-20">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Access to 10 free
                tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Basic templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Community support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> 1 project per
                month
              </li>
            </ul>

            <button className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none">
              Get Started Free
            </button>
          </div>

          <div className="relative rounded-2xl p-6 text-left text-white bg-linear-to-b from-[#4f39f6] to-[#9514fa]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-white/80 mb-4">Best for professionals</p>

            <div className="mb-4">
              <span className="text-3xl font-bold">$29</span>
              <span className="text-white/80">/Month</span>
            </div>

            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center gap-2">
                <FaCheck /> Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Advanced analytics
              </li>
            </ul>

            <button className="btn w-full rounded-full bg-white text-purple-700 border-none hover:bg-gray-100">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-[#F3F4F6] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold text-gray-800">Enterprise</h3>
            <p className="text-sm text-gray-500 mb-4">
              For teams and businesses
            </p>

            <div className="mb-4">
              <span className="text-3xl font-bold">$99</span>
              <span className="text-gray-500">/Month</span>
            </div>

            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Team
                collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Custom
                integrations
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500 text-xs" /> Custom branding
              </li>
            </ul>

            <button className="btn w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white border-none">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
