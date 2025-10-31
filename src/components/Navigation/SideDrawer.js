import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

const SideDrawer = (props) => {
  const nodeRef = useRef(null); // 👈 Create a ref for the element

  const content = (
    <CSSTransition
      nodeRef={nodeRef}        // 👈 Tell CSSTransition to use this ref
      in={props.show}
      timeout={200}            // 👈 Slightly higher timeout for smoother animation
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        ref={nodeRef}          // 👈 Attach the ref to the actual DOM element
        className="side-drawer"
        onClick={props.onClick}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
