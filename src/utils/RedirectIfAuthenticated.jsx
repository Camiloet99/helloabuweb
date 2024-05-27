import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RedirectIfAuthenticated = (WrappedComponent) => {
  const HOC = (props) => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    React.useEffect(() => {
      if (user.email) {
        // Asumimos que si hay email, el usuario está autenticado
        navigate("/"); // Redirigimos a la página de inicio
      }
    }, [user, navigate]);

    // Si el usuario está autenticado, no renderizamos el componente WrappedComponent
    if (user.email) {
      return null;
    }

    // Si no está autenticado, renderizamos el componente WrappedComponent
    return <WrappedComponent {...props} />;
  };

  // Devolvemos el componente de orden superior
  return HOC;
};

export default RedirectIfAuthenticated;
