import React from "react";

const Modal = ({ visible, toggle, content, title }) => visible ? (
  <div className="modal" style={{ display: 'block' }} data-testid="modal-1">
     <div className="modal-dialog" role="document" style={{ zIndex: 100 }}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
        </div>
        <div className="modal-body" data-testid="modal-body">
          {content}
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggle}>Close</button>
        </div>
      </div>
    </div>
    <div className="modal-overlay" onClick={toggle}></div>    
  </div>
) : null;

export default Modal;