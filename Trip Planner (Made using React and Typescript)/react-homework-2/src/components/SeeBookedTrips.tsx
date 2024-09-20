import { useEffect, useState } from "react";
import BookedTripItem from "./BookedTripItem";
import { BookedTrip } from "../common/interface/booked.trip.interface";
import { Link } from "react-router-dom";

export default function SeeBookedTrips() {
  const [bookedTrips, setBookedTrips] = useState<BookedTrip[]>([]);

  useEffect(() => {
    if (Boolean(localStorage.getItem("bookedTrips")))
      setBookedTrips(JSON.parse(localStorage.getItem("bookedTrips") as string));
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl my-5 text-center">My Booked Trips</h1>
      <div>
        {bookedTrips.map((bookedTrip) => (
          <BookedTripItem bookedTrip={bookedTrip} />
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <button className="bg-blue-600 px-4 py-2 text-white rounded-xl hover:bg-blue-700 transition">
          <Link to="/">Homepage</Link>
        </button>
      </div>
    </div>
  );
}
