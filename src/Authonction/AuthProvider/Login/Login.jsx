import { useContext } from "react";
import swal from 'sweetalert';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthConnect } from "../AuthProvider";
import img from './../../../assets/assets/images/login/login.svg'


const Login = () => {
    const { Login } = useContext(AuthConnect)

    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()

    const hendelLogin = event => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const password = form.password.value
        const user = { email, password };
        console.log(user);


        Login(email, password)
            .then(result => {
                console.log(result.user);
                swal("Sucess!", "Login successfull!", "success");
                event.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                swal("error!", "Email & do not match!", "error");
            })
    }
    return (
        <div>
            <div className="mt-6">
                <hr />
            </div>
            <div className="hero min-h-screen bg-teal-200">
                <div className="hero-content flex-col  lg:flex-row  ">
                    <div className="text-center  ">
                        <img src={img} alt="" />

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center my-6 font-bold">Login now!</h1>
                        <form onSubmit={hendelLogin} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center my-3"> Do not have an account?  <Link to="/signUp"><button className=" rounded-lg p-2 text-lg font-bold btn-outline btn-success">Signup</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;