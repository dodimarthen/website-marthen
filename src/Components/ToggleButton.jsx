import React, { useState } from "react";
import { Switch, Stack, Box, Image } from "@chakra-ui/react";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

function ToggleButton() {
  return (
    <Stack direction="row">
      <Switch colorScheme="red" />
      <Switch colorScheme="teal" size="lg" />
    </Stack>
  );
}

export default ToggleButton;
