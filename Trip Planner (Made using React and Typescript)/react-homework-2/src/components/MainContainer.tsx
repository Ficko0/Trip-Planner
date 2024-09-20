import { useContext } from "react";
import { CountryContext } from "../context/country.context";
import CountryCard from "./CountryCard";
import LoadingIcon from "./LoadingIcon";

export default function MainContainer() {
  const { isLoading, country, search, handleInputChange } =
    useContext(CountryContext);

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      <div className="flex justify-center items-center py-3 transition">
        <input
          type="text"
          placeholder="Search Country"
          className="p-2 rounded-xl bg-gray-300"
          onChange={() => handleInputChange}
        />
      </div>
      <div className="grid grid-cols-4 justify-center place-content-center mx-10">
        {country.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}
