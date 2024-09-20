import { useContext } from "react";
import { CountryContext } from "../context/country.context";
import TripContainer from "./TripContainer";
import { useNavigate } from "react-router-dom";

export default function TripPage() {
  const navigate = useNavigate();
  const { tripItems, handleQuantityChange, handleRemoveTripItems } =
    useContext(CountryContext);

  return (
    <div>
      <h1 className="font-bold text-center my-5 text-3xl">Pending Trips</h1>
      <div>
        {tripItems.map((item) => (
          <TripContainer
            item={item}
            handleQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <button disabled={!tripItems.length} onClick={() => navigate('/checkout')} className="bg-blue-500 px-4 py-2 rounded-xl mx-5 text-white hover:bg-blue-600 transition">
          Book Trip
        </button>
        <button
        disabled={!tripItems.length}
          onClick={() => handleRemoveTripItems()}
          className="bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Remove Trips
        </button>
      </div>
    </div>
  );
}
