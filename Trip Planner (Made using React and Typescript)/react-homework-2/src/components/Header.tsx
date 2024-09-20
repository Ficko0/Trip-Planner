import { Link, NavLink } from "react-router-dom";
import { Continent } from "../common/enum/continent.enum";
import {
  GlobeEuropeAfricaIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CountryContext } from "../context/country.context";

export default function Header() {
  const regionName = Object.values(Continent);
  const { tripItemsCount } = useContext(CountryContext);

  return (
    <header className="flex mx-5 my-5 justify-between items-center bg-sky-700 rounded-xl">
      <h1 className="text-4xl font-bold py-4 ml-10 text-white hover:text-gray-400 transition">
        <Link to={"/"}>Trip Planner</Link>
      </h1>
      <div className="flex mx-5 justify-center items-center bg-sky-700 py-4 px-4 rounded-xl">
        <nav>
          <ul className="flex flex-row gap-x-5 text-l text-white font-medium">
            <li className="cursor-pointer hover:text-gray-400 transition">
              <Link to="/">Home</Link>
            </li>
            {regionName.map((region) => (
              <NavLink
                to={`/region/${region}`}
                className={({ isActive, isPending }) => {
                  if (isActive) {
                    return "text-neutral-400";
                  }
                  if (isPending) {
                    return "text-neutral-200";
                  }

                  return "text-white";
                }}
              >
                <li className="cursor-pointer hover:text-gray-400 transition">
                  {region}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mr-10 flex flex-nowrap gap-x-7 items-center justify-center">
        <Link to="/trip" className="ml-20">
          <PaperAirplaneIcon className="size-7" />
          <span className="bg-red-600 rounded-full px-2 text-s mr-2">
            {tripItemsCount}
          </span>
        </Link>
        <Link to="/view-trips">
          <GlobeEuropeAfricaIcon className="size-7" />
        </Link>
      </div>
    </header>
  );
}
