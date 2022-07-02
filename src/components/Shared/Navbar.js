import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const menuItems = <>

      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/completedtasks">Completed Tasks</NavLink></li>
      <li><NavLink to="/todo">To-Do</NavLink></li>
      <li><NavLink to="/calender">Calender</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    
    </>
    return (
        <div className="navbar font-mono font-bold px-12 bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl font-mono" href="..">Heroes Task App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        {menuItems}
    </ul>
  </div>

</div>
    );
};

export default Navbar;