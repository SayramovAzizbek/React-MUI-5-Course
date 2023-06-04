import { Box, Divider, Stack } from "@mui/material";

const MuiStack = () => {
  return (
    <>
      {/* display:flex and flex-direction:column is default style */}
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box height="100px" width="100px" bgcolor="red">
          box 1
        </Box>
        <Box height="100px" width="100px" bgcolor="blue">
          box 1
        </Box>
      </Stack>
    </>
  );
};

export default MuiStack;
