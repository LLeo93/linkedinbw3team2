// Nav.jsx
import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-3 shadow-sm sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="Logo"
            width="34"
            height="34"
          />
        </a>

        <form className="d-none d-md-block mx-3 flex-grow-1">
          <input
            className="form-control rounded-pill"
            type="search"
            placeholder="Search"
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinkedIn"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLinkedIn">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-3">
            {[
              { icon: '🏠', label: 'Home' },
              { icon: '👥', label: 'My Network' },
              { icon: '💼', label: 'Jobs' },
              { icon: '💬', label: 'Messaging' },
              { icon: '🔔', label: 'Notifications' },
            ].map((item, idx) => (
              <li className="nav-item text-center" key={idx}>
                <a
                  className="nav-link d-flex flex-column align-items-center"
                  href="#"
                >
                  <div className="fs-4">{item.icon}</div>
                  <small>{item.label}</small>
                </a>
              </li>
            ))}

            {/* Dropdown "Me" */}
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle d-flex flex-column align-items-center"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="fs-4">🙍‍♂️</div>
                <small>Me</small>
              </a>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Impostazioni
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>

            {/* Divider verticale */}
            <li className="nav-item d-none d-lg-block">
              <div className="vertical-divider"></div>
            </li>

            {/* Dropdown "Per le aziende" */}
            <li className="nav-item dropdown text-center">
              <a
                className="nav-link dropdown-toggle d-flex flex-column align-items-center"
                href="#"
                id="companiesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="fs-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <rect x="1" y="1" width="5" height="5" />
                    <rect x="8" y="1" width="5" height="5" />
                    <rect x="15" y="1" width="5" height="5" />
                    <rect x="1" y="8" width="5" height="5" />
                    <rect x="8" y="8" width="5" height="5" />
                    <rect x="15" y="8" width="5" height="5" />
                    <rect x="1" y="15" width="5" height="5" />
                    <rect x="8" y="15" width="5" height="5" />
                    <rect x="15" y="15" width="5" height="5" />
                  </svg>
                </div>
                <small>Per le aziende</small>
              </a>
              <ul className="dropdown-menu" aria-labelledby="companiesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Strumenti aziendali
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Posta un'offerta di lavoro
                  </a>
                </li>
              </ul>
            </li>

            {/* Prova Premium */}
            <li className="nav-item text-center">
              <a className="nav-link premium-link" href="#">
                <small>Prova Premium per 0€</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
