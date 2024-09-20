import { Route, Routes } from "react-router-dom";
import ContinentPage from "./components/ContinentPage";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import CountryProvider from "./context/country.context";
import NotFound from "./components/NotFound";
import TripPage from "./components/TripPage";
import CheckoutPage from "./components/CheckoutPage";
import BookingCompleted from "./components/BookingCompleted";
import SeeBookedTrips from "./components/SeeBookedTrips";

function App() {
  return (
    <CountryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path={"/region/:regionName"} element={<ContinentPage />} />
        <Route path="/trip" element={<TripPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/booked" element={<BookingCompleted />} />
        <Route path="/view-trips" element={<SeeBookedTrips />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CountryProvider>
  );
}

export default App;
