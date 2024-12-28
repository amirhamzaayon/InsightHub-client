import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";
export const FeaturesLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};
