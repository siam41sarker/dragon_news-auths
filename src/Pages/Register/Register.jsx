import { Link, useNavigate } from "react-router-dom";
import Navigation from "../../Components/Navigation/Navigation";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
    const { setUser, AuthRegister, updatedProfileInfo } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navTo = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
          if (name.length < 5) {
                    setError({ ...error, name: "Name must have more than 5 characters!" });
                    return;
                }
        const photoURL = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        //console.log({ name, photoURL, email, password });
        AuthRegister(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            updatedProfileInfo({ displayName: name, photoURL: photoURL }).then(() => {
                navTo("/");
            }).then(e => console.log(e.code));

        }).catch(e => {
            const errorMessage = e.message;
            console.log(errorMessage)
        }
        )
    };
    return (
        <div className="bg-[#f3f3f3]">
            <div className="pt-10 w-10/12 mx-auto font-poppins">
                <Navigation></Navigation>
                <div className="min-h-screen flex justify-center items-center">
                    <div className="card bg-base-100 w-full max-w-lg shrink-0  rounded-md">
                        <h1 className="mt-10 text-center text-[rgb(#403f3f)] text-4xl font-semibold">Register your account</h1>
                        <div className="flex justify-center mt-10">
                            <hr className="w-[455px]" />
                        </div>
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label text-[rgb(#403f3f)] font-semibold text-xl mt-4">Your Name</label>
                                    <input name="name" type="text" className="mt-3 input bg-[#f3f3f3] w-full" placeholder="Enter your name" />
                                    {
                                        error?.name && <p className="label text-red-500 font-semibold text-xl mt-4">{error.name}</p>
                                    }
                                    <label className="label mt-5 text-[rgb(#403f3f)] text-xl font-semibold">Photo URL</label>
                                    <input name="photo" type="text" className="input mt-3 bg-[#f3f3f3] w-full" placeholder="Photo url" />
                                    <label className="label text-[rgb(#403f3f)] font-semibold text-xl mt-4">Email</label>
                                    <input name="email" type="email" className="mt-3 input bg-[#f3f3f3] w-full" placeholder="Enter your email" />
                                    <label className="label mt-5 text-[rgb(#403f3f)] text-xl font-semibold">Password</label>
                                    <input name="password" type="password" className="input mt-3 bg-[#f3f3f3] w-full" placeholder="Enter your password" />
                                    <button className="btn btn-neutral w-full rounded-md mt-4">Register</button>
                                </fieldset>
                            </form>
                            <h1 className="mt-7 text-center text-[rgb(#403f3f)] text-base font-semibold">Already Have An Account ? <Link to={"/auth/login"} className="text-red-500">Login</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;