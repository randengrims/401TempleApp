function MenuPage() {
  return (
    <div className="container">
      <h3>Menu</h3>
      {/* Row 1: Schedule Appointment (Full Width) */}
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary w-100">
            🗓️ Schedule Appointment
          </button>
        </div>
      </div>

      {/* Row 2: Temples and My Stats (Side-by-Side) */}
      <div className="row mb-3">
        <div className="col-6">
          <button className="btn btn-secondary w-100 d-flex align-items-center">
            <img
              src="../../img/temple_icon.png"
              alt="Temple Icon"
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '6px',
                marginRight: '3px',
              }}
            />
            Temples
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-secondary w-100">📊My Stats</button>
        </div>
      </div>

      {/* Row 3: Upcoming Reservations and Settings (Side-by-Side) */}
      <div className="row mb-3">
        <div className="col-6">
          <button className="btn btn-warning w-100">
            🕖 Upcoming Reservations
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-danger w-100">⚙️Settings</button>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
