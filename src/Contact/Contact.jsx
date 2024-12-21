import Lottie from "lottie-react";
import lottieContact from "../../src/assets/lottie/contact.json"

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-8 space-y-6 bg-black rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-white">Contact Us</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white">Message</label>
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full mt-1"
                            rows="4"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn bg-black text-white w-full"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className="text-center lg:text-left w-96 pl-10">
                <Lottie animationData={lottieContact}></Lottie>
            </div>
        </div>
    );
};

export default Contact;