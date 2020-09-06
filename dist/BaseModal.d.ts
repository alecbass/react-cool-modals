import React from "react";
export interface BaseModalProps {
    show: boolean;
    toggle: () => void;
    /** How long the fade in-out effects should take in milliseconds */
    transitionDuration?: boolean;
    style?: React.CSSProperties;
}
declare const BaseModal: React.FC<BaseModalProps>;
export default BaseModal;
