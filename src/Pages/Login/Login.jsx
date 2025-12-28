import { Link, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Login = () => {
    const {setUser,loginUser} = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);
    const navigate = useNavigate();
    const [error,setError] = useState({})
    const handleLogin = (e) =>
        {
            e.preventDefault();
            const form = new FormData(e.target);
            const email = form.get("email");
            const password = form.get("password");
            loginUser(email,password).then((result)=>
                {
                    setUser(result.user);
                    location.state ? navigate(`${location?.state}`) : navigate("/");
                }).catch(e=>{
                    setError({...error, login : e.code});
                });
        }
    return (
        <div className="bg-[#f3f3f3]">
            <div className="pt-10 w-10/12 mx-auto font-poppins">
                <Navigation></Navigation>
                <div className="min-h-screen flex justify-center items-center">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-md">
                        <h1 className="mt-10 text-center text-[rgb(#403f3f)] text-4xl font-semibold">Login your account</h1>
                        <div className="flex justify-center mt-10">
                            <hr className="w-[455px]" />
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin} action="">
                                <fieldset className="fieldset">
                                    <label className="label text-[rgb(#403f3f)] font-semibold text-xl mt-4">Email</label>
                                    <input name="email" type="email" className="mt-3 input bg-[#f3f3f3] w-full" placeholder="Enter your email" />
                                    <label className="label mt-5 text-[rgb(#403f3f)] text-xl font-semibold">Password</label>
                                    <input name="password" type="password" className="input mt-3 bg-[#f3f3f3] w-full" placeholder="Enter your password" />
                                        {
                                            error?.login && <p className="label mt-5 text-red-500 text-xl font-semibold">{error.login}</p>
                                        }
                                    <button className="btn btn-neutral w-full rounded-md mt-4">Login</button>
                                </fieldset>
                            </form>
                            <h1 className="mt-7 text-center text-[rgb(#403f3f)] text-base font-semibold">Don’t Have An Account ? <Link to={"/auth/register"} className="text-red-500">Register</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;