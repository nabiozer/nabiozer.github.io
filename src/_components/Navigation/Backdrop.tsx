import React from 'react';
import ReactDOM from 'react-dom';

type IBackdropProp = {
  onClick: () => void
}

const Backdrop = (props:IBackdropProp) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook') as HTMLDivElement
  );
};

export default Backdrop;
