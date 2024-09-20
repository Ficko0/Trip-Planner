import { useEffect, useState } from "react";
import { Country } from "../common/interface/country.interface";
import { useNavigate, useParams } from "react-router-dom";
import { Continent } from "../common/enum/continent.enum";
import axios from "axios";
import CountryCard from "./CountryCard";
import LoadingIcon from "./LoadingIcon";

export default function ContinentPage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { regionName: region } = useParams();
  const navigate = useNavigate();

  const isValidRegion = Object.values(Continent).includes(region as Continent);

  useEffect(() => {
    if (!isValidRegion) {
      navigate("/not-found");
      return;
    }
    setIsLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(`Error: ${err}`))
      .finally(() => setIsLoading(false));
  }, [navigate, region, isValidRegion]);

  if (isLoading) {
    return <LoadingIcon />;
  }

  return (
    <div>
      <div className="grid grid-cols-4 place-content-center justify-center mx-10">
        {countries.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}
