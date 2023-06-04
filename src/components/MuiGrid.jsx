import { Grid, Paper } from "@mui/material";

const MuiGrid = () => {
  // Grid
  // The Grid component under the good uses the flexbox module
  // The Grid consists of 12 columns
  // Each item in the grid can take up one or more columns as its width
  // There are five breapoints each corresponding to a certain device width
  // xs for mobile device size, sm for tablet, md for desktop, lg and xl for larger monitors
  // We can assign integer values to each breakpoint which indicates how many of the 12 available columns are occupied by that item when the viewport satisfies that breakpoint constraints

  // <Paper> is background default color is white, elavation is box-shadow
  return (
    <Paper sx={{ padding: "32px" }} elevation={3}>
      <Grid container m={4} rowSpacing={2} columnSpacing={1}>
        <Grid item bgcolor="primary.light" p={2} xs={12} sm={6} md={5}>
          Item 1
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={12} sm={6} md={5}>
          Item 2
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={12} sm={6} md={5}>
          Item 3
        </Grid>
        <Grid item bgcolor="primary.light" p={2} xs={12} sm={6} md={5}>
          Item 4
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiGrid;
