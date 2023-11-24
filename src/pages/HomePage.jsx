import React from "react";
import { NavbarHome } from "../assets/components/NavbarHome";
import { NavbarKelas } from "../assets/components/NavbarKelas";
import { NavbarNotif } from "../assets/components/NavbarNotif";
import { NavbarAkun } from "../assets/components/NavbarAkun";

export const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full">
      <NavbarHome style={{ zIndex: 1 }} />
      {/* <NavbarKelas style={{ zIndex: 1 }} /> */}
      {/* <NavbarNotif style={{ zIndex: 1 }} /> */}
      {/* <NavbarAkun style={{ zIndex: 1 }} /> */}
    </div>
  );
};
