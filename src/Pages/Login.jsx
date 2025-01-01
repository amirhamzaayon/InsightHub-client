import { AuthContext } from "@/Providers/AuthProvider";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
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
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="mt-6 form-control">
                  <button className="btn btn-primary">Login</button>
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
