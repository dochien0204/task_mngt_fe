import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [activeLink, setActiveLink] = React.useState("1");

  const items = [
    {
      id: "1",
      path: "/",
      navName: "Dashboard",
      icon: "icon-grid",
    },
    {
      id: "2",
      path: "/tasks",
      navName: "Tasks",
      icon: "icon-paper",
    },
  ];

  const activeNav = (id) => {
    setActiveLink(id);
  };

  React.useEffect(() => {
    const pathname = window.location.pathname;
    switch (pathname) {
      case "/tasks":
        setActiveLink("2")
        break;
      default:
        break;
    }
  }, [])

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {items.map((item, _) => (
          <li
            className={`${activeLink === item.id ? "active" : ""} nav-item`}
            key={Math.random()}
            onClick={() => activeNav(item.id)}
          >
            <Link className="nav-link" to={item.path}>
              <i className={`${item.icon} menu-icon`}></i>
              <span className="menu-title">{item.navName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
