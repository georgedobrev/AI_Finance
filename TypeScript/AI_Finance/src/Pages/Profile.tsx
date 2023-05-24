export const Profile = () => {
  return (
    <div className="container">
      <div className="profile-wrapper">
        <div className="profile-container">
          <img
            className="profile-image"
            src="src\images\default-avatar-icon.jpg"
            alt="User icon"
          />
          <h1 className="profile-title">User</h1>
          <button className="profile-button">Log out</button>
        </div>
      </div>
    </div>
  );
};
