const CTASection = () => {
  return (
    <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-16 sm:py-20 px-4">
      <div className="max-w-300 mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <button className="btn rounded-full px-6 bg-white text-purple-700 border-none hover:bg-gray-100">
            Explore Products
          </button>

          <button className="btn rounded-full px-6 bg-transparent border border-white text-white hover:bg-white hover:text-purple-700">
            View Pricing
          </button>
        </div>

        <p className="text-white/70 text-xs sm:text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
