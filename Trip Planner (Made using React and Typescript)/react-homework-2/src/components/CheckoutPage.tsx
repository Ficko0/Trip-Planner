import { useForm } from "react-hook-form";
import { CheckoutInformation } from "../common/interface/checkout.information.interface";
import { useContext } from "react";
import { CountryContext } from "../context/country.context";
import { BookedTrip } from "../common/interface/booked.trip.interface";
import { useNavigate } from "react-router-dom";
import LoadingIcon from "./LoadingIcon";

export default function CheckoutPage() {
  const { tripItems, handleRemoveTripItems } = useContext(CountryContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CheckoutInformation>();

  const onSubmit = async (data: CheckoutInformation) => {
    const toBeBookedTrip = {
      country: tripItems.map((item) => ({
        country: item.country,
        numberOfDays: item.numberOfDays,
      })),
      address: data,
    } satisfies Partial<BookedTrip>;

    try {
      localStorage.setItem("bookedTrips", JSON.stringify([toBeBookedTrip]));
      navigate("/booked");
      handleRemoveTripItems();
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  return (
    <div className="text-center justify-center items-center mx-5 my-5">
      <h1 className="font-bold text-3xl my-5">Book Your Trip</h1>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-justify py-10 border border-black rounded-xl shadow-2xl"
        >
          <h2 className="font-bold text-center text-2xl">Enter Details</h2>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">First Name</span>
            <input
              {...register("firstName", { required: "First Name is required" })}
              type="text"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">Last Name</span>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              type="text"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">E-Mail</span>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-100 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">Phone</span>
            <input
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              type="phone"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">Budget</span>
            <input
              {...register("budget", { required: "Budget is required" })}
              type="number"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">PassportNum</span>
            <input
              {...register("passportNumber", {
                required: "Passport Number is required",
              })}
              type="number"
              className="py-1 mx-2"
            />
          </label>
          <label className="block w-80 border py-4 my-4 rounded-xl border-gray-400 mx-5">
            <span className="mx-5">Comment</span>
            <input
              {...register("comment", { required: "Address is required" })}
              type="text"
              className="py-1 mx-2"
            />
          </label>
          {isSubmitting && <LoadingIcon />}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl mt-4 text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Book your Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
