import { Link } from "react-router-dom";
import icon from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navigation = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <div className="mt-5 w-10/12 mx-auto flex justify-between ">
      <div className="w-1/6">
           <h2 className="text-[#403f3f] font-semibold text-xl mt-[30px]">{user && user.displayName}</h2>
      </div>
      <div className="navbar w-4/6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/career">Career</Link>
            </ul>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1  flex space-x-5 text-[#706f6f] text-lg ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Dev Info</Link>
          </ul>
        </div>

      </div>
      <div className="flex  items-center justify-center gap-2">
        <div className="w-10 h-10">
            {
                user?.email ? <img className="w-[50px] h-[50px] rounded-full" src={user?.photoURL} alt="icon" /> : <img className="w-full h-full" src={icon} alt="icon" />
            }
        </div>
        <div>
           {
            user && user.email? <button onClick={logOut} className="btn btn-neutral rounded-none md:w-[140px] md:h-11 text-2xl font-semibold">Log Out</button>: <Link to="/auth/login" className="btn btn-neutral rounded-none md:w-[140px] md:h-11 text-2xl font-semibold">Login</Link>
           }
        </div>
      </div>
    </div>
  )
}
export default Navigation;