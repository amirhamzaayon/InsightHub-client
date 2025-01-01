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
      <div className="min-h-screen mt-6 hero bg-base-200 rounded-2xl">
        <div className="flex-col hero-content lg:flex-row-reverse">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div> */}
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
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
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="text"
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    {/* <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a> */}
                    {
                      <p>
                        Have Already An Account?{" "}
                        <Link to="/auth/login">Login</Link>
                      </p>
                    }
                  </label>
                </div>
                <div className="mt-6 form-control">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
            <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
