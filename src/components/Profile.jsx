import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Profile({ isOpen, toggleSidebar }) {
  const user = {
    username: 'Bhavik',
    profilePicture: 'https://via.placeholder.com/50' // Placeholder profile picture
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    // dispatch(logout());
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubmenu = () => setIsSubmenuOpen(!isSubmenuOpen);

  return (
    <aside
      className={`sidebar bg-light shadow ${isOpen ? 'open' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '250px',
        transition: 'transform 0.3s ease-in-out',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        zIndex: 1040,
      }}
    >
      <div className="d-flex justify-content-end p-3 border-bottom">
        <button
          className="btn btn-light"
          onClick={toggleSidebar}
          style={{
            fontSize: '1.5rem',
            lineHeight: 1,
          }}
        >
          &times;
        </button>
      </div>
      <div className="text-center p-3 border-bottom">
      <i class="fa-solid fa-user"></i>
        <h5 className="mb-0">Hello, {user.username}</h5>
      </div>
      <div className="p-3">
        {user ? (
          <>
            <div className="nav-item mb-3">
              <Link to="/" className="text-primary d-flex align-items-center">
                <i className="fa-solid fa-house me-2"></i>
                Home
              </Link>
            </div>
            <div className="nav-item mb-3">
              <Link to="/addtocard" className="text-primary d-flex align-items-center">
                <i className="fa-solid fa-cart-shopping me-2"></i>
                Cart
              </Link>
            </div>
            <div className="nav-item mb-3">
              <Link to="/confirmorder" className="text-primary d-flex align-items-center">
                <i className="fa-regular fa-circle-check me-2"></i>
                Confirm Order
              </Link>
            </div>
            <div className="nav-item mb-3">
              <Link to="/notifications" className="text-primary d-flex align-items-center">
                <i className="fa-regular fa-bell me-2"></i>
                Notifications <span className="badge bg-danger ms-auto">3</span>
              </Link>
            </div>
            <div className="nav-item mb-3">
              <button
                className="btn btn-link text-primary d-flex align-items-center"
                onClick={toggleSubmenu}
                style={{ textDecoration: 'none' }}
              >
                <i className="fa-regular fa-user me-2"></i>
                Account Settings
                <i className={`fa-solid fa-chevron-${isSubmenuOpen ? 'up' : 'down'} ms-auto`}></i>
              </button>
              {isSubmenuOpen && (
                <div className="ms-3">
                  <div className="nav-item mb-2">
                    <Link to="/profile" className="text-primary d-flex align-items-center">
                      <i className="fa-regular fa-id-card me-2"></i>
                      Profile
                    </Link>
                  </div>
                  <div className="nav-item mb-2">
                    <Link to="/settings" className="text-primary d-flex align-items-center">
                      <i className="fa-solid fa-cog me-2"></i>
                      Settings
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="nav-item">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="nav-item mb-3">
              <Link className="nav-link text-primary" to="/login">
                Login
              </Link>
            </div>
            <div className="nav-item mb-3">
              <Link className="nav-link text-primary" to="/register">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Profile;
