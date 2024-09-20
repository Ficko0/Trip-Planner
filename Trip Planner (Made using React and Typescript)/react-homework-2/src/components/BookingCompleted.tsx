import { Link } from "react-router-dom";

export default function BookingCompleted() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-center font-bold text-3xl">
        Trip Booked Succesfully!
      </h1>
      <div className="my-6">
        <span className="font-medium text-xl">
          The details of the trip will be sent to you via email.
        </span>
      </div>
      <div className="flex justify-center items-center mx-5 my-5">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl my-7 hover:bg-blue-700 transition">
          <Link to="/">Homepage</Link>
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl mx-4 hover:bg-blue-700 transition">
          <Link to="/view-trips">Booked Trips</Link>
        </button>
      </div>
    </div>
  );
}
