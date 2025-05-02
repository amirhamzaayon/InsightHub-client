import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "@/Providers/AuthProvider";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const Register = () => {
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    // if (name.length < 5) {
    //   setError({ ...error, name: "name should be more then 5 character" });
    // }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
        // ..
      });
  };
  return (
    <div>
      <div className="min-h-[calc(100vh-132px)] mt-6 hero rounded-2xl bg-gradient-to-br from-green-100 via-white to-green-100">
        <div className="flex-col p-6 border rounded-lg hero-content lg:flex-row border-green-600/25">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-400">Get Started!</h1>
            <p className="py-6 text-gray-800">
              Explore a wide range of services tailored to your needs
              <br />
              From home repairs to pet care, we've got you covered
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-sm border shadow-2xl card shrink-0 bg-green-50/50 shadow-green-100 border-green-600/25">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                </div>
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="text"
                    type="text"
                    placeholder="Photo URL"
                    className=" input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                </div> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                  <label className="label">
                    <p>
                      Have Already An Account?{" "}
                      <Link
                        to="/auth/login"
                        className="text-green-400 label-text-alt link link-hover"
                      >
                        Login Now
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="mt-6 form-control">
                  <button className="w-full text-gray-800 bg-green-400 border-none btn hover:bg-green-300">
                    Create Account
                  </button>
                </div>
                <div className="mt-4 form-control">
                  <button
                    onClick={() => {
                      signInWithGoogle()
                        .then(() => {
                          navigate("/"); // Navigate to the home page after success
                        })
                        .catch((error) => {
                          console.error("Google Sign-In Error:", error); // Handle any errors
                        });
                    }}
                    className="w-full bg-green-100 border-none btn hover:bg-green-400 "
                  >
                    <FcGoogle />
                    Countine with Google
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
              <div className="form-control">
                <button
                  onClick={() => {
                    signInWithGoogle()
                      .then(() => {
                        navigate("/"); // Navigate to the home page after success
                      })
                      .catch((error) => {
                        console.error("Google Sign-In Error:", error); // Handle any errors
                      });
                  }}
                  className="btn btn-neutral"
                >
                  <FcGoogle />
                  Countine with Google
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
