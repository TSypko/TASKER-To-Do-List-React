import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeChange, selectTheme } from "../themeSlice";
import { SwitchContainer, Label, Button } from "./styled";

const Switch = () => {

  const { theme } = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (

    <SwitchContainer>
      <Label htmlFor="switch">
        Night Mode
       </Label>
      <Button
        id="switch"
        onClick={() => dispatch(themeChange(theme))}
      />
      <Label toggle htmlFor="switch"></Label>
    </SwitchContainer>

  );
};

export default Switch;