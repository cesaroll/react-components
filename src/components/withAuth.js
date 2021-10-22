import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (Compoenent) => {
  return (props) => {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    return (
      <Component loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} {...props}>
      </Component>
    );
  };
}
