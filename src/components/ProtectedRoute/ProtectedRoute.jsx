import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ openLogin: true }} />;
  }

  return children;
}

export default ProtectedRoute;
