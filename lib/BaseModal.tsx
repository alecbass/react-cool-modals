import React from "react";
import ReactDOM from "react-dom";

export interface BaseModalProps {
  show: boolean;
  toggle: () => void;
  style?: React.CSSProperties;
}

const BaseModal: React.FC<BaseModalProps> = props => {

  const modalOverlayStyle = props.show ? overlayStyle : hideOverlayStyle;

  function handleModalClick() {
    props.toggle();
  }

  function render() {
    return (
      <div id="modal-overlay" style={modalOverlayStyle} onClick={handleModalClick}>
        <div id="modal" style={{ ...baseModalContentStyles, ...props.style }} onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(render(), document.getElementById("root") as HTMLElement);
}

export default BaseModal;

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  zIndex: 9999,
  top: 0,
  transition: "background-color 300ms linear",
  backgroundColor: "rgb(0, 0, 0, 0.4)"
};

const hideOverlayStyle: React.CSSProperties = {
  ...overlayStyle,
  backgroundColor: "#FFFFFF",
  top: "-100vh",
}

const baseModalContentStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: "0 0 60%",
  height: "40%",
  background: "#FFFFFF",
  border: "1px solid blue",
  padding: 16,
};
