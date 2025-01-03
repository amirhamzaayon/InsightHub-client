import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";
export const FeaturesLayout = () => {
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main className="w-6/12 py-12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};
