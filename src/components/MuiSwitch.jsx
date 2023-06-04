import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch />}
        onChange={handleChange}
      />
      <FormControlLabel
        label="Dark mode"
        control={<Switch size="small" color="success" />}
        onChange={handleChange}
      />
    </Box>
  );
};

export default MuiSwitch;
