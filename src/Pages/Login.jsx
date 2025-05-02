import { AuthContext } from "@/Providers/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div>
      <div className="min-h-[calc(100vh-132px)] mt-6 hero rounded-2xl bg-gradient-to-br from-green-100 via-white to-green-100">
        <div className="flex-col p-6 border rounded-lg hero-content lg:flex-row border-green-600/25">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-green-400">Login now!</h1>
            <p className="py-6 text-gray-800">
              Not only get the service but also Insight <br />
              Take the best services based on pure Insight
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-sm border shadow-2xl card shrink-0 bg-green-50/50 shadow-green-100 border-green-600/25">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input focus:outline-none focus:ring-1 focus:ring-green-300"
                    required
                  />
                  <div className="text-center">
                    <label className=" label">
                      {
                        <p>
                          Don't have an account yet?{" "}
                          <Link
                            to="/auth/register"
                            className="text-green-400 label-text-alt link link-hover"
                          >
                            Register Now
                          </Link>
                        </p>
                      }
                    </label>
                    <label className="label">
                      <a
                        href="#"
                        className="text-red-400 label-text-alt link link-hover"
                      >
                        Or Forgot password?
                      </a>
                    </label>
                  </div>
                </div>
                <div className="mt-6 form-control">
                  <button className="w-full text-gray-800 bg-green-400 border-none btn hover:bg-green-300">
                    Login
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
