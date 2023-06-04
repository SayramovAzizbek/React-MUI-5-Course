import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState(null);

  console.log({ value });

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} />
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        /* readOnly */
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
