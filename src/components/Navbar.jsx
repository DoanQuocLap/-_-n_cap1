import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Màu chữ/link đổi theo trạng thái để nổi trên hero tối
  const linkBase =
    "px-2 py-1 text-sm md:text-[15px] font-medium transition border-b-2 border-transparent";
  const active =
    pathname !== "/" || isScrolled
      ? "text-blue-600 border-blue-600"
      : "text-white border-white/70";

  const inactive =
    pathname !== "/" || isScrolled
      ? "text-slate-700 hover:text-blue-600"
      : "text-white/80 hover:text-white";

  const navItem = (to: string, label: string) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        `${linkBase} ${isActive ? active : inactive}`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        pathname !== "/" || isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${
            pathname !== "/" || isScrolled ? "text-[#1E293B]" : "text-white"
          }`}
        >
          MaintainPro
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/login", "Login")}
          {navItem("/dashboard", "Dashboard")}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/submit-ticket"
            className={`hidden md:inline-block rounded-lg px-4 py-2 text-sm font-semibold transition
            ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-[#1E293B] hover:bg-slate-100"
            }`}
          >
            Gửi yêu cầu bảo trì
          </Link>

          <button
            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
              ${
                isScrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white/90 hover:bg-white/10"
              }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden transition-colors ${
            isScrolled ? "bg-white/95 backdrop-blur" : "bg-slate-900/90"
          }`}
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isScrolled ? "text-slate-800" : "text-white"} ${
                  isActive ? active : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkBase} ${isScrolled ? "text-slate-800" : "text-white"} ${
                  isActive ? active : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkBase} ${isScrolled ? "text-slate-800" : "text-white"} ${
                  isActive ? active : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${linkBase} ${isScrolled ? "text-slate-800" : "text-white"} ${
                  isActive ? active : ""
                }`
              }
              onClick={() => setOpen(false)}
            >
              Dashboard
            </NavLink>

            <Link
              to="/submit-ticket"
              onClick={() => setOpen(false)}
              className={`mt-2 rounded-lg px-4 py-2 text-sm font-semibold text-center ${
                isScrolled
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              Gửi yêu cầu bảo trì
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
