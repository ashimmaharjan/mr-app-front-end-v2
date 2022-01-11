import { useState } from "react";
import { LocalHospital, LoginOutlined } from "@mui/icons-material";
import { signIn, authenticate, isAuthenticated } from "../API/api";
import { Redirect } from "react-router-dom";
import AlertMessage from "../Alerts/Alert";
const Login = ({ history }) => {

    const [values, setValues] = useState({
        username: "",
        password: "",
        error: "",
        redirectToReferrer: false,
    });
    const handleChange = (name) => (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const { username, password, error, redirectToReferrer } = values;
    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signIn({ username, password }).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true,
                    });
                })
            }
        })
    };

    const loginForm = () => {

        return (

            <section className="flex w-full h-screen justify-center items-center" style={{ background: "#D9E7FF" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 h-[500px] w-10/12
             border-4 shadow border-gray-50 overflow-hidden rounded-3xl">
                    <div
                        className="col-span-1 h-full flex flex-col justify-center px-10 text-5xl text-white "
                        style={{ background: "#0980C5" }}>

                        <LocalHospital style={{ fontSize: "100px" }} ></LocalHospital>
                        <h1 className="mt-5">Medical </h1>
                        <h2 className="mt-3">Representative</h2>
                        <h2 className="mt-3">Application</h2>
                    </div>
                    <form action="POST" >
                        <div className="col-span-1 h-full flex text-gray-500 flex-col justify-center items-center" style={{ background: "edf0ff" }}>
                            <div>
                                <h2 className="text-3xl font-semibold font-sans"> Welcome to Mr App ! </h2>
                                <div className="mt-8">
                                    <div>
                                        <label htmlFor="Email or Username" className="ml-2">Email or Username</label>
                                        <input type="text" required="required" name="username" onChange={handleChange("username")} className="w-full h-11 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                    </div>

                                    <div className="mt-3">
                                        <label htmlFor="Email or Username" className="ml-2">Password</label>
                                        <input type="password" required name="password" onChange={handleChange("password")} className="w-full h-11 mt-1 shadow-sm rounded-full pl-3 border-none outline-none focus:ring-2" />
                                    </div>

                                    <button onClick={clickSubmit} type='submit' className="h-14 w-full py-2 mt-10 bg-blue-800 rounded-xl text-white shadow hover:shadow-xl cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
                                        Login
                                        <LoginOutlined className="ml-1"></LoginOutlined>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section >
        )
    }


    const redirectUser = () => {
        if (redirectToReferrer) {
            return <Redirect to='/adminDashboard' />;
        }

        if (isAuthenticated()) {
            return <Redirect to='/adminDashboard' />;
        }
    }

    return (
        <div>
            {
                error ? <AlertMessage message={error} severity={"warning"} /> : ''
            }
            {loginForm()}
            {redirectUser()}
        </div>
    );
}

export default Login;