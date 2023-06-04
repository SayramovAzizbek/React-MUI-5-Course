import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  console.log({ countries });

  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
    setCountry(e.target.value);
  };

  return (
    <Box width="700px" display='flex' >
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austria</MenuItem>
      </TextField>
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austria</MenuItem>
      </TextField>
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austria</MenuItem>
      </TextField>
    </Box>
  );
};
