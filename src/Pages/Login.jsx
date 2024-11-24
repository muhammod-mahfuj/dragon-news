import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="card p-8 bg-base-100 w-full max-w-lg mx-auto shadow-2xl">
         <form className="card-body ">
            <h2 className="font-bold text-center text-2xl">Login Your Account</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <p className="text-center mt-2">Don't have a Account?<Link to="auth/register" className="text-yellow-600"> Register</Link></p>
        </form>
      </div>
    );
};

export default Login;