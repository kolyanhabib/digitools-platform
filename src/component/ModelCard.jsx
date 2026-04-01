import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

const ModelCard = ({ model, carts, setCarts }) => {
  const isAdded = carts.some((item) => item.id === model.id);

  const handleAdd = () => {
    if (isAdded) {
      toast.error("Already added!");
      return;
    }

    setCarts((prev) => [...prev, model]);
    toast.success("Added to cart!");
  };

  const tagStyle = {
    new: "bg-green-100 text-green-600",
    popular: "bg-purple-100 text-purple-600",
    "best-seller": "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
      {model.tag && (
        <span
          className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full ${tagStyle[model.tagType]}`}
        >
          {model.tag}
        </span>
      )}

      <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-4">
        {model.icon}
      </div>

      <h3 className="font-semibold text-lg">{model.name}</h3>

      <p className="text-sm text-gray-500 mt-2">{model.description}</p>

      <div className="mt-4">
        <span className="text-2xl font-bold">${model.price}</span>
        <span className="text-sm text-gray-500">/{model.period}</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-gray-500">
        {model.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-center">
            <FaCheck className="text-green-500 text-xs" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`w-full mt-6 py-3 rounded-full ${
          isAdded
            ? "bg-green-500 text-white"
            : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
        }`}
      >
        {isAdded ? "Added ✓" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;
