import { Box } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Box>Azizbek with div tag</Box>
      <Box component="span">Azizbek with span tag</Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": { backgroundColor: "primary.light" },
        }}
      >
        Azizbek with custom styles
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        Aizbek with inline styles
      </Box>
    </>
  );
};

export default MuiLayout;
