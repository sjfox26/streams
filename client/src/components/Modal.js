import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = props => {
    return ReactDOM.createPortal(
        <div>
            <div onClick={props.onDismiss} className="backdrop"></div>
            <div className="modal">
                <div className="header">{props.text}</div>

                <div className="content">
                    {props.content}
                </div>

                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;