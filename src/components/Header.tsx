import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import withAuth from "./withAuth";

const Header = ({ loggedInUser, setLoggedInUser }) => {

  const theme = useContext(ThemeContext).theme;


  const LoggedIn = ({ loggedInUser, setLoggedInUser }) => {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>
        <button className="btn btn-secondary"
          onClick={() => {
            setLoggedInUser("");
          }}>Logout</button>
      </div>
    );
  };

  const NotLoggedIn = ({ loggedInUser, setLoggedInUser }) => {
    return (
      <div>
        <span>Logged in as {loggedInUser}</span>
        <button className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault();
            const userName = window.prompt("Enter Login Name:", "");
            setLoggedInUser(userName);
          }}>Login</button>
      </div>
    );
  };



  return(
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page"
              src="/images/SVCClogo.png" />
          </div>
          <div className={
              theme === "light" ? "light" : "text-info"
              }
            >
            <h4 className="header-title">
              Silicon Valley Code Camp
            </h4>
          </div>
          <div
            className={
              theme === "light" ? "" : "text-info"
            }
          >
            {loggedInUser && loggedInUser.length > 0 ?
              <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> :
              <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Header);
