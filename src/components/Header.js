import {Routes, Route, Link} from "react-router-dom";

function Header({email, onSignOut, headerNavigation}) {

  return (
    <header className="header header-container">
      <a className="header__link" href="#" target="_blank">
        <div className="header__logo" aria-label="Проект Место"></div>
      </a>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="header__auth" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="sign-up"
          element={
            <Link className="header__auth" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div className="header__navigate">
                <p className="header__email">{email}</p>
                <button 
                type="button"
                className="header__navigate-button" 
                onClick={onSignOut}>
           {headerNavigation}
         </button>
              </div>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;







// function Header({currentPath, setLoggedIn, email, setUserEmail }) {
//   const navigate = useNavigate();
//   const headerNavigation = navigateToPaths();

//   let onClickCallback;

//   function signOut() {
//     localStorage.removeItem("jwt"); //token
//     setLoggedIn(false);
//     setUserEmail("");
//     navigate("/sign-in", { replace: true });
//   }

//   function goToRegister() {
//     navigate("/sign-up", { replace: true });
//   }

//   function goToSignIn() {
//     navigate("/sign-in", { replace: true });
//   }

//   function navigateToPaths() {
//     if (currentPath === "/") {
//       onClickCallback = signOut;
//       return "Выйти";
//     } else if (currentPath === "/sign-up") {
//       onClickCallback = goToSignIn;
//       return "Войти";
//     } else if (currentPath === "/sign-in") {
//       onClickCallback = goToRegister;
//       return "Регистрация";
//     }
//   }

//     return <header className="header header-container">
//     <Link className="header__link" href="#" target="_blank">
//       <div className="header__logo" aria-label="Проект Место"></div>
//     </Link>
//     <div className="header__navigate">
//         <p className="header__email">{email}</p>
//         <button className="header__navigate-button" onClick={onClickCallback}>
//           {headerNavigation}
//         </button>
//       </div>
//   </header>
// }