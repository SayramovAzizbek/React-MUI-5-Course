import { Check } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is and error alert</Alert>
      <Alert severity="warning">This is and warning alert</Alert>
      <Alert severity="info">This is and info alert</Alert>
      <Alert severity="success">This is and success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is and error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is and warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is and info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is and success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is and error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is and warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is and info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check />}
        action={
          <Button color="inherit" size="small">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is and success alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
