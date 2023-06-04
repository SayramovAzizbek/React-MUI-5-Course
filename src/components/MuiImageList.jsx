import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from "@mui/material";

const MuiImageList = () => {
  const itemsData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Car",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Car1",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera2",
    },

    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera3",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera4",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera5",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera6",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera7",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera8",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera9",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera10",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera11",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Camera12",
    },
  ];

  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemsData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
        rowHeight={164}
      >
        {itemsData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemsData.map((item) => (
            <ImageListItem key={item.title}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      `
    </Stack>
  );
};

export default MuiImageList;
