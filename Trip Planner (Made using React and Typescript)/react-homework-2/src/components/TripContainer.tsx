import { TripItem } from "../common/interface/trip-item.interface";

type TripContainerProps = {
  item: TripItem;
  handleQuantityChange: (country: string, typeOfChange: "+" | "-") => void
};

export default function TripContainer({ item, handleQuantityChange }: TripContainerProps) {
  return (
    <div className="flex justify-between items-center mx-5 my-5 border border-black rounded-xl shadow">
      <div className="pl-5 text-center py-3">
        <img className="size-10 mx-5 my-2" src={item.country.flags.svg} />
        <span className="font-medium">{item.country.name.common}</span>
      </div>
      <div className="flex justify-center items-center">
        <h3 className="font-bold mx-5">Number of Days: {item.numberOfDays}</h3>
        <button
          className="bg-green-600 px-4 py-2 rounded mx-3 text-center hover:bg-green-700 transition"
          onClick={() => handleQuantityChange(item.country.name.common, "+")}
        >
          +
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded mr-4 text-center hover:bg-red-700 transition"
          onClick={() => handleQuantityChange(item.country.name.common, "-")}
        >
          -
        </button>
      </div>
    </div>
  );
}
