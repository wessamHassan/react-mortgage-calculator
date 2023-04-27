import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

function SliderSingle(props) {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{props.label}</Typography>
        <Typography variant="h5">{props.unit} {props.amount}</Typography>
      </Stack>

      <Slider
        defaultValue={props.defaultValue}
        step={props.step}
        marks
        min={props.min}
        max={props.max}
        aria-label="Defult"
        valueLabelDisplay="auto"
        onChange={props.onChange}
        value={props.value}
      />
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography color="text.secondary" variant="caption">
          {props.min}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {props.max}
        </Typography>
      </Stack>
    </>
  );
}

export default SliderSingle;
