import React, { useState, useRef, useEffect } from 'react';
import './Nav.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setShowSearchMobile((prev) => !prev);
  };

  const toggleDropdownMenu = () => {
    setShowDropdownMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchMobile(false);
      }
    };

    if (showSearchMobile) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchMobile]);

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdownMenu(false);
      }
    };

    if (showDropdownMenu) {
      document.addEventListener('mousedown', handleClickOutsideDropdown);
    } else {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown);
    };
  }, [showDropdownMenu]);

  return (
    <nav className="navbar navbar-light bg-white px-3 shadow-sm sticky-top">
      <div className="container-fluid d-flex flex-nowrap align-items-center">
        {/* Logo + Search */}
        <div className="d-flex align-items-center me-3">
          <a className="navbar-brand d-flex align-items-center me-2" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="Logo"
              width="34"
              height="34"
            />
          </a>

          <div className="d-none d-lg-block" ref={searchRef}>
            <form className="search-field">
              <div className="position-relative">
                <input
                  className="form-control rounded-pill ps-4"
                  type="search"
                  placeholder="Cerca"
                  style={{ height: '36px' }}
                />
                <i
                  className="fa fa-search position-absolute"
                  style={{
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#888',
                  }}
                ></i>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="d-lg-none me-2">
          {!showSearchMobile && (
            <button className="btn" onClick={toggleSearch}>
              <i className="fa fa-search"></i>
            </button>
          )}
        </div>

        {/* Mobile Search Field */}
        {showSearchMobile && (
          <form className="w-100 my-2 d-lg-none" ref={searchRef}>
            <div className="position-relative">
              <input
                className="form-control rounded-pill ps-4"
                type="search"
                placeholder="Cerca"
                autoFocus
                style={{ height: '36px' }}
              />
              <i
                className="fa fa-search position-absolute"
                style={{
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888',
                }}
              ></i>
            </div>
          </form>
        )}

        {/* Nav Items */}
        <ul
          className={`navbar-nav d-flex align-items-center flex-row ms-auto gap-3 mb-0 flex-nowrap  ${
            showSearchMobile ? 'd-none' : ''
          }`}
        >
          {[
            { icon: '🏠', label: 'Home' },
            { icon: '👥', label: 'My Network' },
            { icon: '💼', label: 'Jobs' },
          ].map((item, idx) => (
            <li className="nav-item text-center" key={idx}>
              <a
                className="nav-link d-flex flex-column align-items-center"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.label === 'Home') {
                    navigate('/');
                  }
                }}
              >
                <div className="fs-responsive">{item.icon}</div>
                <small className="d-none d-lg-block">{item.label}</small>
              </a>
            </li>
          ))}

          {/* "Me" dropdown */}
          <li
            className="d-none d-lg-block nav-item dropdown position-relative"
            ref={dropdownRef}
          >
            <button
              className="nav-link dropdown-toggle d-flex flex-column align-items-center btn"
              onClick={toggleDropdownMenu}
              aria-expanded={showDropdownMenu ? 'true' : 'false'}
            >
              <div className="fs-responsive border-end border-1">🙍‍♂️</div>
              <small>Me</small>
            </button>
            {showDropdownMenu && (
              <div
                className="dropdown-menu show p-3"
                style={{
                  minWidth: '300px',
                  right: 0,
                  left: 'auto',
                  zIndex: 999,
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://placecats.com/100/100"
                    alt="Avatar"
                    className="rounded-circle me-2"
                    width="48"
                    height="48"
                  />
                  <div>
                    <strong>Libanio Leoncini</strong>
                    <div className="text-muted small">
                      Magazziniere presso LAIKA
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm mt-1 w-100 my-1 rounded-5 p-0">
                  Visualizza profilo
                </button>

                <div className="mb-2">
                  <div className="fw-bold text-muted small mb-1">Account</div>
                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none premium "
                  >
                    Prova Premium
                  </a>
                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none"
                  >
                    Impostazioni e privacy
                  </a>
                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none"
                  >
                    Guida
                  </a>
                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none"
                  >
                    Lingua
                  </a>
                </div>

                <div>
                  <div className="fw-bold text-muted small mb-1">Gestisci</div>
                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none"
                  >
                    Post e attività
                  </a>

                  <a
                    href="#"
                    className="dropdown-item px-0 py-1 text-decoration-none text-danger"
                  >
                    Esci
                  </a>
                </div>
              </div>
            )}
          </li>

          {/* Aziende */}
          <li className="d-none d-lg-block nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex flex-column align-items-center"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="fs-responsive">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {[0, 7, 14].map((y) =>
                    [0, 7, 14].map((x, i) => (
                      <rect
                        key={`${x}-${y}-${i}`}
                        x={x + 1}
                        y={y + 1}
                        width="5"
                        height="5"
                      />
                    ))
                  )}
                </svg>
              </div>
              <small>Per le aziende</small>
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Opzione 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Opzione 2
                </a>
              </li>
            </ul>
          </li>

          {/* Premium */}
          <li>
            <a
              className="dropdown-item premium-link d-none d-lg-block"
              href="#"
            >
              <small className="d-none d-lg-block premium">
                Prova Premium per 0€
              </small>
            </a>
          </li>
        </ul>

        {/* Tre puntini - solo mobile */}
        <div
          className={`d-lg-none ms-2 position-relative ${
            showSearchMobile ? 'd-none' : ''
          }`}
          ref={dropdownRef}
        >
          <button
            className="btn p-0"
            onClick={toggleDropdownMenu}
            aria-expanded={showDropdownMenu ? 'true' : 'false'}
          >
            <i className="fa fa-ellipsis-h"></i>
          </button>

          {showDropdownMenu && (
            <div
              className="dropdown-menu show"
              style={{
                position: 'absolute',
                top: '100%',
                right: '10px',
                zIndex: 999,
                minWidth: '200px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
              }}
            >
              <ul className="list-unstyled p-0">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fs-responsive">🙍‍♂️</div>
                    <small>Me</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fs-responsive">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        {[0, 7, 14].map((y) =>
                          [0, 7, 14].map((x, i) => (
                            <rect
                              key={`${x}-${y}-${i}`}
                              x={x + 1}
                              y={y + 1}
                              width="5"
                              height="5"
                            />
                          ))
                        )}
                      </svg>
                    </div>
                    <small>Per le aziende</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <small className="premium">Prova Premium </small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fs-responsive">💬</div>
                    <small>Messaggi</small>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="fs-responsive">🔔</div>
                    <small>Notifiche</small>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
