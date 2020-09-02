import React from "react";
import { SwitchContainer, Label, Button } from "./styled"

const Switch = ({ onChange }) => (

  <SwitchContainer>
    <Label htmlFor="switch">
      Night Mode
    </Label>
    <Button
      id="switch"
      onClick={onChange}
    />
    <Label toggle htmlFor="switch"></Label>
  </SwitchContainer>
  
);

export default Switch;