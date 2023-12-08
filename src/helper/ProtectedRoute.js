// unused

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ checker, children }) => {
    if (!checker) {
        return <Navigate to="/" replace />;
    }

    return children;
};


export default ProtectedRoute;
