import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [activeLink, setActiveLink] = React.useState("1");

  const items = [
    {
      id: "2",
      path: "/projects",
      navName: "Projects",
      icon: "icon-paper",
    },
    {
      id: "3",
      path: "/members",
      navName: "Members",
      icon: "icon-paper",
    },
  ];

  const activeNav = (id) => {
    setActiveLink(id);
  };

  React.useEffect(() => {
    const pathname = window.location.pathname;
    switch (pathname) {
      case "/projects":
        setActiveLink("2");
        break;
      case "/members":
        setActiveLink("3");
      default:
        break;
    }
  }, []);

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li
          className={`${activeLink === 0 ? "active" : ""} nav-item`}
          key={Math.random()}
          onClick={() => activeNav(0)}
          style={{ border: "1px solid #ddd", borderRadius: 8 }}
        >
          <Link className="nav-link" to={"/"}>
            <i
              className={`icon-grid menu-icon`}
              style={{ marginTop: "-6px" }}
            ></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li style={{ paddingLeft: 16, paddingTop: 10, fontWeight: "bold" }}>
          <span className="menu-title">PROJECTS</span>
        </li>
        {items.map((item, _) => (
          <li
            className={`${activeLink === item.id ? "active" : ""} nav-item`}
            key={Math.random()}
            onClick={() => activeNav(item.id)}
            style={{ border: "1px solid #ddd", borderRadius: 8 }}
          >
            <Link className="nav-link" to={item.path}>
              <i
                className={`${item.icon} menu-icon`}
                style={{ marginTop: "-6px" }}
              ></i>
              <span className="menu-title">{item.navName}</span>
            </Link>
          </li>
        ))}
        <li
          style={{
            paddingLeft: 16,
            paddingTop: 10,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <i
              className="icon-plus menu-icon"
              style={{ marginTop: "-6px" }}
            ></i>
            <span>Add a Project</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
