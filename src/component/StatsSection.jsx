const StatsSection = () => {
  return (
    <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-12 sm:py-16">
      <div className="max-w-300 mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-8 sm:gap-0">
          <div className="flex-1">
            <h2 className="text-[40px] sm:text-[60px] font-extrabold text-white">
              50K+
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Active Users
            </p>
          </div>

          <div className="hidden sm:block h-12 w-px bg-white/30"></div>

          <div className="flex-1">
            <h2 className="text-[40px] sm:text-[60px] font-extrabold text-white">
              200+
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">
              Premium Tools
            </p>
          </div>

          <div className="hidden sm:block h-12 w-px bg-white/30"></div>

          <div className="flex-1">
            <h2 className="text-[40px] sm:text-[60px] font-extrabold text-white">
              4.9
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2">Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
