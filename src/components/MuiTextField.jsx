import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Form Input"
          required
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={
            !value ? "Required" : "Don't share your password with anyone "
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Don't share your password with anyone"
        />
        <TextField label="Read only " InputProps={{ readOnly: true }} />
        <Stack direction="row" spacing={2}>
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
