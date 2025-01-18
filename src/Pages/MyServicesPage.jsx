import { useContext, useEffect, useState } from "react";
import { MyService } from "../Components/MyService";
import { AuthContext } from "@/Providers/AuthProvider";

export const MyServicesPage = () => {
  const [myServices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyServices(data));
  }, [user.email]);
  return (
    <div>
      <section className="flex flex-col gap-6">
        {myServices.map((service) => (
          <MyService key={service._id} service={service}></MyService>
        ))}
      </section>
    </div>
  );
};
