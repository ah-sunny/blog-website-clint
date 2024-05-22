import { ToastContainer, toast } from "react-toastify";

const NewsLetter = () => {

    const handleSubscribe = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        
        if (email) {
            toast.success("Thank you for subscribing to our newsletter")
event.target.reset()
        }

    }

    return (
        <div className="my-7">
            {/* <h1 className="mx-auto text-xl text-center font-bold">Newsletter</h1> */}
            {/*  */}
            <form onSubmit={handleSubscribe} className="p-3 lg:p-10 bg-base-200  rounded-md space-x-3">
                <div className="flex justify-between gap-10">
                    <div className="form-control lg:w-[47%]">
                        <label className="label">
                            <span className="text-sm font-semibold">Emter your email for subscribe :</span>
                        </label>

                        <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required />
                    </div>
                </div>
                <button className="btn btn-info text-white uppercase mt-4">Submit</button>
            </form>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default NewsLetter;