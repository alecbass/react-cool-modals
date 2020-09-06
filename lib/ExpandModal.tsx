import React from "react";
import ReactDOM from "react-dom";

import BaseModal, { BaseModalProps } from "./BaseModal";

interface Props extends BaseModalProps {
  expandable?: boolean;
}

const ExpandModal: React.FC<Props> = props => {

  function render() {
    const baseStyle: React.CSSProperties = {
      transition: `flex ${props.transitionDuration ?? 300}ms linear, height ${props.transitionDuration ?? 300}ms linear`,
      height: props.style?.height ?? "40%"
    };

    const hideModalStyle: React.CSSProperties = {
      ...baseStyle,
      height: 0,
      flex: 0
    };

    const showModalStyle: React.CSSProperties = {
      ...baseStyle,
      flex: "0 0 1200px"
    }

    const modalStyle = props.show ? showModalStyle : hideModalStyle;


    return (
      <BaseModal {...props} style={{ ...modalStyle, ...props.style }}>
        {props.children}
      </BaseModal>
    );
  }

  return ReactDOM.createPortal(render(), document.getElementById("root") as HTMLElement);
}

export default ExpandModal;
