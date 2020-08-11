import React from "react";
import { SwitchContainer, Label, Button } from "./styled"

const Switch = ({ event }) => (

  <SwitchContainer>
    <Label htmlFor="switch">
      Night Mode
    </Label>
    <Button
      id="switch"
      onClick={event}
    />
    <Label toggle htmlFor="switch"></Label>
  </SwitchContainer>
  
);

export default Switch;