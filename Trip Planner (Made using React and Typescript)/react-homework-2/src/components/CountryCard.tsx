import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Country } from "../common/interface/country.interface";
import { useContext } from "react";
import { CountryContext } from "../context/country.context";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const { handleAddToTripPlan } = useContext(CountryContext);

  return (
    <div className="mx-5 my-5">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="svg"
            height="200"
            image={country.flags.svg}
            alt={country.name.common}
            className="m-5 rounded-xl"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {country.region}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleAddToTripPlan(country)}
          >
            Book Your Trip
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
