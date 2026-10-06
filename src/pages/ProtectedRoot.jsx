import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
function ProtectedRoute({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        supabase.auth.getUser().then(({ data }) => {
            setUser(data.user);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
export default ProtectedRoute;