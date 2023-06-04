import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      {/* from <h1 /> to <h6 /> */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="h6" component="h1">
        h6 Heading but h1 tag
      </Typography>

      {/* only <h6 /> */}
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      {/* <p /> */}
      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, rem omnis
        accusantium dolores consequatur molestiae ullam dolorum tempora velit
        inventore quis voluptatum ipsa iste animi laboriosam nobis, aut laborum
        rerum.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
        consequuntur, ad numquam quos cum nulla odio nihil, aspernatur velit ex
        voluptatum fuga laudantium aperiam repudiandae quo soluta, consequatur
        quisquam? Facilis.
      </Typography>
    </>
  );
};

export default MuiTypography;
