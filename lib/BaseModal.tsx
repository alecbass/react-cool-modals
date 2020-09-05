import React from "react";

export interface BaseModalProps {
  show: boolean;
  style?: React.CSSProperties;
}

const BaseModal: React.FC<BaseModalProps> = props => {

  const modalOverlayStyle = props.show ? overlayStyle : hideOverlayStyle;

  return (
    <div id="modal-overlay" style={modalOverlayStyle}>
      <div id="modal" style={{ ...baseModalContentStyles, ...props.style }}>
        MESSAGE
      {props.children}
      </div>
    </div>
  );
}

export default BaseModal;

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vw",
  width: "100vw",
  zIndex: 9999,
  top: 0,
  transition: "top 300ms linear",
  background: "gray"
};

const hideOverlayStyle: React.CSSProperties = {
  ...overlayStyle,
  top: "-100vh"
}

const baseModalContentStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flex: "0 0 40%",
  width: "60%",
};
