import { Send } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* Button */}
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        {/* Link <a/> tag*/}
        <Button variant="outlined" href="https://google.com">
          Link
        </Button>

        {/* Button with color */}
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
        </Stack>
      </Stack>

      {/* Button with size */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* Button with start/end icons */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" startIcon={<Send />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>

        {/* Icon buttons */}
        <IconButton aria-label="send">
          <Send />
        </IconButton>
        <IconButton aria-label="send" color="success" size="small">
          <Send />
        </IconButton>

        {/* Button with disabled */}
        <Button variant="contained" disabled>
          Send
        </Button>
        {/* removes effect when clicks */}
        <Button variant="contained" disableRipple>
          Send
        </Button>
        {/* removes bosh-shadow when clicks */}
        <Button variant="contained" disableElevation>
          Send
        </Button>

        {/* Button with onClick */}
        <Button variant="contained" onClick={() => alert("Clicked")}>
          Click
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
