import React from "react";

const Modal = ({ visible, toggle, content, title }) => visible ? (
  <div className="modal" style={{ display: 'block'}} data-testid="modal-1">
     <div className="modal-dialog" role="document" style={{ zIndex: 100 }}>
      <div className="modal-content border-0">
        <div className="modal-header bg-dark border-0">
          <h5 className="modal-title text-warning" id="exampleModalLabel">{title}</h5>
        </div>
        <div className="modal-body bg-dark border-0" data-testid="modal-body">
          {content}
        </div>
        <div className="modal-footer bg-dark border-0">
          <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={toggle}>Close</button>
        </div>
      </div>
    </div>
    <div className="modal-overlay" onClick={toggle}/>
  </div>
) : null;

export default Modal;
