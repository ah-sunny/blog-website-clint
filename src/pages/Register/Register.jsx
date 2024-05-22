import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import signupImage from '../../../public/signup.png';
import { AuthContext } from '../../Provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAuxiosSecure';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)
    const axiosSecure = useAxiosSecure();

    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const displayName = form.get('name');
        const photoURL = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        const user = { displayName, photoURL, email, password }
        // console.log(displayName, photoURL, email, password, user);
        //reset error
        // setRegisterError('')
        if (password.length < 6) {
            toast.error(' Password should be at least 6 characters')
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should be at one uppercase characters.')
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Your password should be at one lowercase characters.')
            return;
        }


        const url = '/users'
        // // create user
        createUser(email, password)
            .then(() => {
                axiosSecure.post(url, user)

                    .then(res => {
                        // console.log('in post responsee', res.data)
                        if (res.data.insertedId) {
                            swal({
                                title: "Good job!",
                                text: "User create successfully!",
                                icon: "success",
                                button: "okay!",
                            });
                        }
                        event.target.reset()
                    })

            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div className='mb-10  border-2 p-5 mt-10 rounded-xl shadow-2xl'>
            <h2 className="text-3xl mt-3 mb-5 text-center italic"> Register Here </h2>
            <div className='flex gap-4 justify-center '>
                <div>
                    <img className='h-96 w-[100%]' src={signupImage} alt="" />
                </div>

                <div className='flex flex-col w-[40%]items-center justify-center'>
                    <form onSubmit={handleRegister} className=" p-0 mx-auto">

                        <div className='flex gap-6 w-full'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name :</span>
                                </label>
                                <input type="text" required name="name" placeholder="Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL :</span>
                                </label>
                                <input type="text" required name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                        </div>

                        <div className='flex gap-6 w-full'> 
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email :</span>
                                </label>
                                <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password :</span>
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    required name="password" placeholder="Password" className="input input-bordered" />

                                <span className='absolute bottom-56 lg:bottom-[228px] right-10 lg:right-[320px] ' onClick={() => setShowPass(!showPass)}> {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </span>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
                    </form>
                </div>

                {/* {
                    registerError && <p className='text-red-500'>{registerError} </p>
                } */}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;