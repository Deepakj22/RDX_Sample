import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = <P extends object>(
    WrappedComponent: React.ComponentType<P>
) => {
    return (props: P) => {
        const navigate = useNavigate();

        // Simulating an auth check (replace with your actual auth logic)
        const isAuthenticated = !!localStorage.getItem("token");

        useEffect(() => {
            if (!isAuthenticated) {
                // Redirect to login if not authenticated
                navigate("/login");
            }
        }, [isAuthenticated, navigate]);

        // If not authenticated, return null or a loading spinner while redirecting
        if (!isAuthenticated) {
            return <div>Loading...</div>;
        }

        // If authenticated, render the component with its props
        return <WrappedComponent { ...props } />;
    };
};

export default withAuth;