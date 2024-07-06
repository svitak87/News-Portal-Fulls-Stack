import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, logued } from '../../redux/actions';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);

  // Obtener el token del query string en la URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlToken = urlParams.get('token');

  useEffect(() => {
    // Validar el token de la URL si existe
    if (urlToken) {
      dispatch(logued(urlToken));
    } else if (token) {
      dispatch(logued(token));
    }
  }, [dispatch, token, urlToken]);

  const handleLogued = async (route) => {
    try {
      if (!user) {
        alert('Debes estar logueado para acceder');
      } else {
        navigate(route);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleLogout = async () => {
    try {
      await dispatch(logOutUser(token || urlToken)); // Utiliza el token de la URL si está presente
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black h-14 flex items-center justify-between px-4 fixed w-full z-10 top-0 mb-10">
      <div className="flex space-x-4">
        <Link to="/suscribirse" className="text-white hover:text-gray-300">Suscribirse</Link>
        <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        <span onClick={handleLogout} className="text-white hover:text-gray-300 cursor-pointer">Logout</span>
        <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
      </div>
      <div>
        <div className="flex space-x-4">
          <span onClick={() => handleLogued("/tecnologia")} className="text-white hover:text-gray-300 cursor-pointer">Tecnología</span>
          <span onClick={() => handleLogued("/argentina")} className="text-white hover:text-gray-300 cursor-pointer">Argentina</span>
          <span onClick={() => handleLogued("/us-business")} className="text-white hover:text-gray-300 cursor-pointer">Negocios en EE.UU</span>
          <span onClick={() => handleLogued("/world-news")} className="text-white hover:text-gray-300 cursor-pointer">Mundo</span>
          <span onClick={() => handleLogued("/wall-street-journal")} className="text-white hover:text-gray-300 cursor-pointer">Wall Street Journal</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




