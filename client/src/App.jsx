import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const App = () => {
  const { authUser, isAuthReady } = useContext(AuthContext);

  if (!isAuthReady) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ background: "var(--page-bg)" }}
      >
        <p
          className="rounded-full border px-5 py-2"
          style={{
            background: "var(--panel-bg)",
            borderColor: "var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          Loading chat...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;
