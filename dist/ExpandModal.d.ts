import React from "react";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    expandable?: boolean;
}
declare const ExpandModal: React.FC<Props>;
export default ExpandModal;
