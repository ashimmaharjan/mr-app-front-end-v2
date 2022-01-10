import { LocalHospital } from "@mui/icons-material";
import { FiUserPlus } from 'react-icons/fi'

const Register = () => {
    return (
        <section>
            <section className="flex w-full h-screen justify-center items-center" style={{ background: "#D9E7FF" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] w-10/12 border-4 shadow border-gray-50 overflow-hidden rounded-3xl">
                    <div className="col-span-1 relative h-full flex text-gray-500 flex-col justify-center items-center" style={{ background: "edf0ff" }}>

                        <div className="absolute top-4 right-4">
                            <p className="text-sm">Already a user? <a href="/" className="text-blue-700 ml-1">Login</a></p>
                        </div>

                        <div>
                            <div className="mt-8">
                                <div>
                                    <label htmlFor="Email" className="ml-2">Email</label>
                                    <input type="email" className="w-full h-9 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="Phone" className="ml-2">Phone</label>
                                    <input type="text" className="w-full h-9 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="Email or Username" className="ml-2">Username</label>
                                    <input type="text" className="w-full h-9 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="Password" className="ml-2">Password</label>
                                    <input type="password" className="w-full h-9 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                </div>

                                <button className="inline-flex items-center justify-center h-14 w-full py-2 mt-10 bg-blue-800 rounded-xl text-white shadow hover:shadow-xl cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
                                    Register
                                    <FiUserPlus className="ml-1.5"></FiUserPlus>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-span-1 h-full flex flex-col justify-center px-10 text-4xl text-white "
                        style={{ background: "#0980C5" }}>

                        <h2>Register</h2>
                        <div className="w-32 h-[1px] bg-white mt-1"></div>
                        <LocalHospital style={{ fontSize: "50px" }} className="mt-10" ></LocalHospital>
                        <h1 className="mt-5">Medical </h1>
                        <h2 className="mt-3">Representative</h2>
                        <h2 className="mt-3">Application</h2>
                    </div>
                </div>
            </section >
        </section>
    );
}

export default Register;