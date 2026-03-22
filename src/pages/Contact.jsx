import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact the Grand Piece Store</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>
            <button className="btn btn-success">
              <i className="fas fa-paper-plane me-2"></i>
              Send Message
            </button>
          </form>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Contact;