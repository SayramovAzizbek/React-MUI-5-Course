import { Button, ButtonGroup } from "@mui/material";

const MuiButtonGroup = () => {
  return (
    /* All button's style will given to ButtonGroup but onClick should written for each if needed  */
    <ButtonGroup
      variant="contained"
      orientation="vertical"
      size="small"
      color="secondary"
      aria-label="alignment button group"
    >
      <Button onClick={() => alert("Left Button Clicked")}>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
};

export default MuiButtonGroup;
