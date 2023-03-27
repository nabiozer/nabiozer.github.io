import React from 'react';
import ReactDOM from 'react-dom';

interface IBackdropProp {
  onClick : () => void,
  children? : React.ReactNode;
  show?: boolean;
}
const SideDrawer = (props:IBackdropProp) => {
  const content = (
  
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook')! as HTMLElement) ;
};

export default SideDrawer;
