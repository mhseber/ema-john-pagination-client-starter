import Lottie from 'lottie-react';
import lottieLogin from '../../assets/lottie/login.json'

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className=" shadow-xl shadow-black rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-white">User Login</h1>
                <form>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Forget Password Link */}
                    <div className="mb-6 text-right">
                        <a
                            href="/auth/register"
                            className="text-sm text-white hover:underline"
                        >
                            Forgat Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full  text-white py-2 rounded-md bg-gradient-to-r from-gray-500 to-gray-800  font-semibold"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center  font-bold pt-5  ">
                    Dont't Have An Account ?
                    <span className="text-white pl-5">Register</span>
                </p>
            </div>
            <div className="text-center lg:text-left w-96 pl-10">
                <Lottie animationData={lottieLogin}></Lottie>
            </div>
        </div>
    );
};

export default Login;


