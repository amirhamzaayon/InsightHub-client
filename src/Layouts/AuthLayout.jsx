import { NavBar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="w-10/12 mx-auto mt-6">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <section>
          <Outlet></Outlet>
        </section>
      </main>
    </div>
  );
};
