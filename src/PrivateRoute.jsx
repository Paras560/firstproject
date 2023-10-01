import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

function Privateroute() {
  return (
    <div className="flex">
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Privateroute;
