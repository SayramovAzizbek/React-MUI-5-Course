import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const MuiAutoComplete = () => {
  const [value, setValue] = useState("");

  console.log({ value });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        // freeSolo
      />
    </Stack>
  );
};

export default MuiAutoComplete;
