import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

export default function ProtectedRoute() {
 const auth = useAuth();

    return auth.isAuthenticated ? <Outlet/>:<Navigate to = "/"/>
}
// This component checks if the user is authenticated.
// If they are, it renders the child components (the dashboard).
// If not, it redirects them to the login page.
