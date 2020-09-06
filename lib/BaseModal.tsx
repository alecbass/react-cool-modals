import React from "react";
import ReactDOM from "react-dom";

export interface BaseModalProps {
  show: boolean;
  toggle: () => void;
  /** How long the fade in-out effects should take in milliseconds */
  transitionDuration?: boolean;
  style?: React.CSSProperties;
}

const BaseModal: React.FC<BaseModalProps> = props => {

  function handleModalClick() {
    props.toggle();
  }

  function render() {
    const overlayStyle: React.CSSProperties = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      zIndex: 9999,
      top: 0,
      transition: ``, //`background-color ${props.transitionDuration ?? 300}ms ease-in`,
      backgroundColor: "rgb(0, 0, 0, 0.4)"
    };

    const hideOverlayStyle: React.CSSProperties = {
      ...overlayStyle,
      backgroundColor: "rgb(255, 255, 255, 1)",
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
      overflow: "hidden"
    };


    const modalOverlayStyle = props.show ? overlayStyle : hideOverlayStyle;


    return (
      <div className="modal-overlay" style={modalOverlayStyle} onClick={handleModalClick}>
        <div className={`modal ${props.show ? "modal-show" : ""}`} style={{ ...baseModalContentStyles, ...props.style }} onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    );
  }

  return ReactDOM.createPortal(render(), document.getElementById("root") as HTMLElement);
}

export default BaseModal;
