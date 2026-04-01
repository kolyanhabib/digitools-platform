import ModelCard from "./ModelCard";

const Models = ({ models, carts, setCarts, activeTab, setActiveTab }) => {
  return (
    <section className="bg-[#F9FAFC] py-16 sm:py-20 px-4">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101727]">
            Premium Digital Tools
          </h2>

          <p className="mt-3 text-[#627382] text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>

          <div className="flex justify-center mt-6">
            <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("model")}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === "model"
                    ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow"
                    : "text-[#101727]"
                }`}
              >
                Products
              </button>

              <button
                onClick={() => setActiveTab("cart")}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === "cart"
                    ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow"
                    : "text-[#101727]"
                }`}
              >
                Cart ({carts.length})
              </button>
            </div>
          </div>
        </div>

        {activeTab === "model" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                carts={carts}
                setCarts={setCarts}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Models;
