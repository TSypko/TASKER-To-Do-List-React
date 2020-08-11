import React from "react";
import { SwitchContainer, Label, Button } from "./styled"

const Switch = ({ event, state }) => (

  <SwitchContainer>
    <Label htmlFor="switch">
      Night Mode
    </Label>
    <Button
      toggled={state}
      id="switch"
      onClick={event}
    />
    <Label toggle htmlFor="switch"></Label>
  </SwitchContainer>
  
);

export default Switch;