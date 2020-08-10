import React from "react";
import { SwitchContainer, Label, Button } from "./styled"

const Switch = ({value, event}) => (

    <SwitchContainer>
      <Label htmlFor="switch">
        Night Mode
    </Label>
      <Button
        id="switch"
        value={value}
        onClick={event}
      />
      <Label toggle htmlFor="switch"></Label>
    </SwitchContainer>
  );

export default Switch;