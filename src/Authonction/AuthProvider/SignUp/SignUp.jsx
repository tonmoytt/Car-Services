import { useContext, useState } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { AuthConnect } from "../AuthProvider";
import img from './../../../assets/assets/images/login/login.svg'


const SignUp = () => {
    const [password, setpassword] = useState('')

    const { CreateUser, Google } = useContext(AuthConnect)

    const hendelSignup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { name, email, password };
        console.log(user);


        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }

        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                swal("Success!", "Registration successfully!", "success");
            })
            .catch(error => {
                console.error(error)
            })

    }

    const googlebtn = () => {
        Google()
            .then(result => {
                console.log(result.user);
                swal("Success!", "Google Registration successfully!", "success");
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>

            <div className="mt-6">
                <hr />
            </div>

            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center">
                        <img src={img} alt="" />

                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl my-8 font-bold text-center ">Register Now</h1>
                        <form onSubmit={hendelSignup} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>

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

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <p className="text-center my-3"> Already have an account?  <Link to="/login"><button className=" rounded-lg p-2 text-lg font-bold btn-outline btn-success">Login</button></Link></p>

                        <div className="w-full">
                            <p className="mx-4 my-4  "> <button onClick={googlebtn} className="btn w-full btn-outline btn-secondary ">Register with Google</button></p>
                        </div>

                    </div>
                    <div className='bg-red-200 rounded-base'>
                        {
                            password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;