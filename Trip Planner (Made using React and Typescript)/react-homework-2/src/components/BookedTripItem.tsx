import { BookedTrip } from "../common/interface/booked.trip.interface";

type BookedTripItemProps = {
  bookedTrip: BookedTrip;
};

export default function BookedTripItem({ bookedTrip }: BookedTripItemProps) {
  return (
    <div className="border border-black rounded-xl mx-10 my-7">
      <div className="flex flex-col items-center justify-center my-10 mx-auto">
        <img
          className="size-24"
          src={bookedTrip.country.map((item) => item.country.flags.svg)}
          alt=""
        />
        <h1 className="text-center font-bold text-2xl my-2">
          {bookedTrip.country.map((item) => item.country.name.common)}
        </h1>
        <p className="my-2">
          Booked For: {bookedTrip.country.map((item) => item.numberOfDays)} Days
        </p>
      </div>
      <span className="flex justify-center items-center font-medium text-xl">
        Order Details
      </span>
      <div className="flex flex-col my-6 mx-5 border border-yellow-600 px-4 py-4 rounded-xl">
        <p className="my-4 font-medium text-l">
          First Name: {bookedTrip.address.firstName}
        </p>
        <p className="my-4 font-medium text-l">
          Last Name: {bookedTrip.address.lastName}
        </p>
        <p className="my-4 font-medium text-l">
          E-Mail: {bookedTrip.address.email}
        </p>
      </div>
      <span className="flex justify-center items-center font-medium text-xl">
        Customer Comment
      </span>
      <div className="flex flex-row mx-5 my-6 border border-gray-700 py-4 px-4 rounded-xl">
        <p>{bookedTrip.address.comment}</p>
      </div>
    </div>
  );
}
