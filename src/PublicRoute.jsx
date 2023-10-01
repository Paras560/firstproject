import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

function PublicRoute() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  return <Outlet />;
}

export default PublicRoute;
