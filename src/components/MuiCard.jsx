import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height={140}
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum
            earum ipsam consectetur sequi facilis quisquam repudiandae veritatis
            similique, cum voluptatum laboriosam, sapiente labore eius nemo
            numquam nobis, ratione quod!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
