import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
   const {createNewUser,setUser} = useContext(AuthContext);

   const handleSubmit = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const name = form.get('name');
      const email = form.get('email');
      const photo = form.get('photo');
      const password = form.get('password');
      console.log(name,email,photo,password)

      createNewUser(email, password)
      .then((result) => {
            const user = result.user
            setUser(user)
            console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
      });
   }
    return (
        <div className="card px-7 py-3 bg-base-100 w-full max-w-lg mx-auto shadow-2xl">
         <form onSubmit={handleSubmit} className="card-body ">
            <h2 className="font-bold text-center text-2xl">Register Your Account</h2>
            <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input name="name" type="text" placeholder="your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo</span>
            </label>
            <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered" required />
          </div>
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
            <button className="btn btn-neutral">Register</button>
          </div>
          <p className="text-center mt-2">Already have an Account?<Link to="auth/login" className="text-yellow-600"> Login</Link></p>
        </form>
      </div>
    );
};

export default Register;