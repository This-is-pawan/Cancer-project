import { FaGooglePay } from "react-icons/fa6";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";

const Pay = () => {
  return (
    <div className="w-full flex flex-col items-center mt-10 gap-5">

      <h2 className="text-2xl font-bold text-green-700">Support Cancer Awareness</h2>
      <p className="text-gray-600 text-center px-4">
        Your small donation can bring a big change. Choose any payment option below:
      </p>

      <div className="flex gap-6 mt-4">
        <button className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition">
          <SiPaytm className="text-5xl text-blue-600" />
          <span className="mt-2 font-semibold text-gray-700">Paytm</span>
        </button>

        <button className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition">
          <SiPhonepe className="text-5xl text-purple-600" />
          <span className="mt-2 font-semibold text-gray-700">PhonePe</span>
        </button>

        <button className="flex flex-col items-center bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition">
          <FaGooglePay className="text-5xl text-black" />
          <span className="mt-2 font-semibold text-gray-700">Google Pay</span>
        </button>
      </div>

      

    </div>
  );
};

export default Pay;
