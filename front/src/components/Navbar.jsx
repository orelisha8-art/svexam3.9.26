import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";
import PortalLogo from "./decor/PortalLogo";
import GlitchHeading from "./decor/GlitchHeading";

const linkBase =
  "px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-all";
const linkActive = "bg-portal text-space shadow-[0_0_16px_rgba(151,206,76,0.7)]";
const linkInactive = "text-cable hover:bg-cable/10";

function Navbar() {
  return (
    <nav className="border-b-2 border-portal/40 bg-space-card/70 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <GlitchHeading
          as="span"
          className="flex items-center gap-2 font-display text-3xl tracking-wide text-portal drop-shadow-[0_0_10px_rgba(151,206,76,0.7)]"
        >
          <span className="inline-flex items-center gap-2">
            <PortalLogo className="size-8 animate-[portal-spin_6s_linear_infinite]" />
            מעקב אימונים
          </span>
        </GlitchHeading>
        <div className="flex gap-2">
          <NavLink
            to="/all-workouts"
            className={({ isActive }) => cn(linkBase, isActive ? linkActive : linkInactive)}
          >
            כל האימונים
          </NavLink>
          <NavLink
            to="/add-workout"
            className={({ isActive }) => cn(linkBase, isActive ? linkActive : linkInactive)}
          >
            הוספת אימון
          </NavLink>
          <NavLink
            to="/search-workouts"
            className={({ isActive }) => cn(linkBase, isActive ? linkActive : linkInactive)}
          >
            חיפוש
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
