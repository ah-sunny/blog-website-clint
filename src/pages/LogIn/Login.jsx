import axios from "axios";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { SignInUser, googleCreateUser, githubCreateUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        //sign in user
        SignInUser(email, password)
            .then(() => {
                // const loggedUser = result.user;
                // console.log("loggedUser",loggedUser);
                const user = { email };
                // console.log("user email: ",user)
                axios.post('https://blog-website-server-pink-eight.vercel.app/jwt', user, {
                    withCredentials: true,
                })
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.succes) {
                            swal({
                                title: "Good job!",
                                text: "User create successfully!",
                                icon: "success",
                                button: "okay!",
                            });
                            event.target.reset()
                            navigate(location?.state ? location.state : '/');

                        }
                    })



            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleGoogleLogIn = () => {
        googleCreateUser()
            .then(result => {
                // const loggedEmail = result?.user?.email
                // const user = { email: loggedEmail }
                // axios.post('https://blog-website-server-pink-eight.vercel.app/jwt', user, {
                //     withCredentials: true,
                // })
                //     .then(res => {
                //         console.log(res.data)
                //     })

                // const user = {name:`${result?.displayName}` ,photo: `${result?.photoURL}`,email:`${result?.email}`,uid: `${result?.uid}`  }
                fetch('https://blog-website-server-pink-eight.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(result?.user)
                })
                    .then(res => res.json())
                    .then(() => {
                        swal({
                            title: "Good job!",
                            text: "User create successfully!",
                            icon: "success",
                            button: "okay!",
                        });
                        // console.log(data)
                        // console.log(result.user)
                        // console.log(user)
                        navigate(location?.state ? location.state : '/');
                    })



            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleGithubLogin = () => {
        githubCreateUser()
            .then(result => {

                // const loggedEmail = result?.user?.email
                // const user = { email: loggedEmail }
                // axios.post('https://blog-website-server-pink-eight.vercel.app/jwt', user, {
                //     withCredentials: true,
                // })
                //     .then(res => {
                //         console.log(res.data)
                //     })

                fetch('https://blog-website-server-pink-eight.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(result?.user)
                })
                    .then(res => res.json())
                    .then(() => {
                        swal({
                            title: "Good job!",
                            text: "User create successfully!",
                            icon: "success",
                            button: "okay!",
                        });
                        // console.log(data.user)
                        navigate(location?.state ? location.state : '/');
                    })


            })
            .catch(error => {
                toast.error(error)
                console.log("this error :", error)
            })
    }

    return (
        <div className="border-2 rounded-2xl shadow-xl py-4 my-5 w-[50%] mx-auto ">
            <h2 className="text-3xl text-center font-semibold italic">Login </h2>
           

            <form onSubmit={handleLogin} className=" w-[80%] mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div><p className="text-2xl font-bold mx-auto text-center my-2  "> OR </p></div>
            <div className="flex justify-center gap-4">
                <div onClick={handleGoogleLogIn}
                    className="card bg-base-100 shadow-xl w-30 flex flex-row items-center gap-2 px-4 py-1 text-xl font-bold ">
                    <span><FcGoogle></FcGoogle></span>
                    <p>Google</p>
                </div>
                <div onClick={handleGithubLogin} className="card bg-base-100 shadow-xl w-30 flex flex-row items-center gap-2 px-4 py-1 text-xl font-bold ">
                    <span><FaGithub ></FaGithub ></span>
                    <p>GitHub</p>
                </div>
            </div>


            <p className="text-center mt-4">Do not have an account ? <Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;