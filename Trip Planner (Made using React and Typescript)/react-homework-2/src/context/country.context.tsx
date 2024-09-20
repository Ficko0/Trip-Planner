import { ReactNode, createContext, useEffect, useState } from "react";
import { Country } from "../common/interface/country.interface";
import axios from "axios";
import { TripItem } from "../common/interface/trip-item.interface";

type CountryContextProviderType = {
  children: ReactNode | ReactNode[];
};

type CountryContextType = {
  country: Country[];
  isLoading: boolean;
  tripItems: TripItem[];
  tripItemsCount: number;
  search: string;
  handleInputChange: (e: any) => void;
  handleQuantityChange: (country: string, typeOfChange: "+" | "-") => void;
  handleAddToTripPlan: (country: Country) => void;
  handleRemoveTripItems: () => void;
};

const defaultValues: CountryContextType = {
  country: [],
  isLoading: false,
  tripItems: [],
  tripItemsCount: 0,
  search: "",
  handleInputChange: () => {},
  handleQuantityChange: () => {},
  handleAddToTripPlan: () => {},
  handleRemoveTripItems: () => {},
};

export const CountryContext = createContext<CountryContextType>(defaultValues);

export default function CountryProvider({
  children,
}: CountryContextProviderType) {
  const [country, setCountry] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const localStorageExists = Boolean(localStorage.getItem("tripItems"));
  const [tripItems, setTripItems] = useState<TripItem[]>(
    localStorageExists
      ? JSON.parse(localStorage.getItem("tripItems") as string)
      : []
  );
  const [tripItemsCount, setTripItemsCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountry(res.data))
      .catch((err) => console.error(`Error: ${err}`))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${search}`)
      .then((res) => setSearch(res.data))
      .catch((err) => console.log(`Error: ${err}`));
  }, [search]);

  useEffect(() => {
    localStorage.setItem("tripItems", JSON.stringify(tripItems));
    setTripItemsCount(tripItems.length);
  }, [tripItems]);

  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleQuantityChange = (country: string, typeOfChange: "+" | "-") => {
    const updatedTripItems = tripItems
      .map((tripItem) => {
        if (tripItem.country.name.common === country) {
          return {
            ...tripItem,
            numberOfDays:
              typeOfChange === "+"
                ? tripItem.numberOfDays + 1
                : tripItem.numberOfDays - 1,
          };
        }

        return tripItem;
      })
      .filter((item) => item.numberOfDays);

    setTripItems(updatedTripItems);
  };

  const handleAddToTripPlan = (country: Country) => {
    console.log(tripItems);
    if (
      tripItems.some(
        (tripItem) => tripItem.country.name.common === country.name.common
      )
    ) {
      handleQuantityChange(country.name.common, "+");
      return;
    }

    const tripItem = {
      country,
      numberOfDays: 1,
    } satisfies TripItem;
    setTripItems([...tripItems, tripItem]);
  };

  const handleRemoveTripItems = () => {
    localStorage.getItem("tripItems")?.length &&
      (localStorage.removeItem("tripItems"), setTripItems([]));
  };

  return (
    <CountryContext.Provider
      value={{
        country,
        isLoading,
        tripItems,
        tripItemsCount,
        search,
        handleInputChange,
        handleAddToTripPlan,
        handleQuantityChange,
        handleRemoveTripItems,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
