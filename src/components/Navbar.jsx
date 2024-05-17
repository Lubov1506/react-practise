import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../redux/authSlice";
import { NavLink } from "react-router-dom";
import { selectBalance } from "../redux/transactionSlice";
import { buildLinkClass } from "../helpers/addActiveClass";

const Navbar = () => {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)
  const user = useSelector(selectCurrentUser)
  return (
    <div className="navbar bg-slate-400">

      <div className="navbar-start ">
        <div className="dropdown">
          <h2>{user.name} | balance: { balance}</h2>

        </div>
   
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4 text-xl">
          <NavLink className={({isActive})=>buildLinkClass(isActive, 'font-bold underline' )} to="/">Dashboard</NavLink>
          <NavLink className={({isActive})=>buildLinkClass(isActive, 'font-bold underline' )} to="/statistics">Statistics</NavLink>
          <NavLink className={({isActive})=>buildLinkClass(isActive, 'font-bold underline' )} to="/add-transaction">Add transaction</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
  <button onClick={() => dispatch(logout())} className="btn btn-error">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
