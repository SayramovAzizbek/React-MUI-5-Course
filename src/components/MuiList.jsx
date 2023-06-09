import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text 1" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="Secondary text 2" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Mail />
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="Secondary text 3" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
