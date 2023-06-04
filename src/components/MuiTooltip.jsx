import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const MuiTooltip = () => {
  return (
    <>
      <Tooltip title="Delete">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="right">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" arrow enterDelay={500} leaveDelay={200}>
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default MuiTooltip;
