import { CheckoutInformation } from "./checkout.information.interface";
import { TripItem } from "./trip-item.interface";

export interface BookedTrip {
  country: TripItem[];
  address: CheckoutInformation;
}
