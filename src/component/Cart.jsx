import { toast } from "react-toastify";
import { BsCartX } from "react-icons/bs";

const Cart = ({ carts, setCarts, setActiveTab }) => {
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    setCarts((prev) => prev.filter((c) => c.id !== item.id));
    toast.success("Item removed!");
  };

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  return (
    <div className="max-w-300 mx-auto px-4 my-10">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-[#101727] mb-6">Your Cart</h2>

        {carts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <BsCartX className="text-3xl text-gray-400" />
            </div>

            <h3 className="text-lg font-semibold text-[#101727]">
              Your cart is empty
            </h3>

            <p className="text-[#627382] text-sm mt-2">
              Looks like you haven’t added any products yet.
            </p>

            <button
              onClick={() => {
                setActiveTab("model");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {carts.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#F3F4F6] p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl">
                      {item.icon}
                    </div>

                    <div>
                      <p className="font-semibold text-[#101727]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#627382]">${item.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-500 text-sm font-medium hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6">
              <span>Total:</span>
              <span className="font-bold">${total}</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-6 py-3 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
