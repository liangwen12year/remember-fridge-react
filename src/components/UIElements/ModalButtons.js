import React from "react";
import styled from "styled-components";
import closeBlack from "../../img/close-black.svg";
import closeWhite from "../../img/close-white.svg";
import yes from "../../img/yes.svg";
import noKo from "../../img/no-white.svg";
import noGr from "../../img/no-green.svg";
import trash from "../../img/trash.svg";

const CloseButton = ({ isDark }) =>
  isDark ? <img src={closeWhite} alt="" /> : <img src={closeBlack} alt="" />;

const BaseBigButton = styled.button`
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 10px 20px;
  height: 45px;
  font-size: 14px;
  font-weight: 700;
  flex-basis: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s, transform 0.3s;
`;
const Save = styled(BaseBigButton)`
  background: var(--saveButton);
  transform: ${props =>
    !props.isRemoving ? "translateY(0)" : "translateY(45px)"};
  opacity: ${props => (!props.isRemoving ? 1 : 0)};
  pointer-events: ${props => (!props.isRemoving ? "all" : "none")};
  img {
    width: 12px;
    height: 9px;
    margin-right: 5px;
  }
`;
const Cancel = styled(BaseBigButton)`
  background: transparent;
  border: 1px solid var(--cancelButton);
  color: var(--cancelButton);
  transform: ${props =>
    !props.isRemoving ? "translateY(0)" : "translateY(45px)"};
  opacity: ${props => (!props.isRemoving ? 1 : 0)};
  pointer-events: ${props => (!props.isRemoving ? "all" : "none")};
  img {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
`;
const Remove = styled(BaseBigButton)`
  transform: ${props =>
    props.isRemoving ? "translateY(-45px)" : "translateY(0)"};
  opacity: ${props => (props.isRemoving ? 1 : 0)};
  pointer-events: ${props => (props.isRemoving ? "all" : "none")};
  background: var(--removeButton);
  display: ${props => (props.mode === "edit" ? "flex" : "none")};
  img {
    width: 14px;
    height: 15px;
    margin-right: 5px;
  }
`;
const CancelRemoval = styled(BaseBigButton)`
  transform: ${props =>
    props.isRemoving ? "translateY(-45px)" : "translateY(0)"};
  opacity: ${props => (props.isRemoving ? 1 : 0)};
  pointer-events: ${props => (props.isRemoving ? "all" : "none")};
  display: ${props => (props.mode === "edit" ? "flex" : "none")};
  background: transparent;
  border: 1px solid var(--removeCancelButton);
  color: var(--removeCancelButton);
`;
const RemovePrompt = styled.button`
  border: none;
  outline: none;
  flex-basis: 100%;
  margin-left: 0;
  padding: 0;
  height: auto;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: var(--removeButton);
  text-decoration: underline;
  font-size: 14px;
  display: ${props => (props.mode === "edit" ? "flex" : "none")};
  font-weight: 700;
`;
const SaveButton = props => (
  <Save data-mode="edit" onClick={props.click} isRemoving={props.isRemoving}>
    <img src={yes} alt="" />
    {props.mode === "edit" ? "Save" : "Add item"}
  </Save>
);
const CancelButton = props => (
  <Cancel onClick={props.click} isRemoving={props.isRemoving}>
    <img src={props.isDark ? noKo : noGr} alt="" />
    Cancel
  </Cancel>
);
const RemoveButton = props => (
  <Remove onClick={props.click} mode={props.mode} isRemoving={props.isRemoving}>
    <img src={trash} className="trash" alt="" />
    Remove
  </Remove>
);
const CancelRemovalButton = props => (
  <CancelRemoval
    mode={props.mode}
    isRemoving={props.isRemoving}
    onClick={props.click}
  >
    Keep it
  </CancelRemoval>
);
const RemovePromptButton = props => (
  <RemovePrompt mode={props.mode} onClick={props.click}>
    {props.isRemoving ? "This action cannot be undone." : "Remove this item"}
  </RemovePrompt>
);
export {
  CloseButton,
  SaveButton,
  CancelButton,
  RemoveButton,
  CancelRemovalButton,
  RemovePromptButton
};
