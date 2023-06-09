import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";

const MuiBadge = () => {
  return (
    <Stack spacing={2} directon="row">
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="secondary" max={999}>
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
