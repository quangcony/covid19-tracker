import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Stack, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchFromApi } from "../utils/fetchApi";

import { countries } from "../utils/constants";

const SearchFeed = () => {
  const [covids, setCovids] = useState([]);

  const { SearchTerm } = useParams();

  useEffect(() => {
    fetchFromApi("countries", { search: SearchTerm }).then((data) =>
      setCovids(data.response)
    );
  }, [SearchTerm]);

  return (
    <Box px={2} sx={{ minHeight: "92vh" }} pb={5}>
      <Typography variant="h5" color="white">
        {covids.length} results found for{" "}
        <span style={{ color: "red" }}>{SearchTerm}</span>
      </Typography>
      <Grid container spacing={2} px={0} mt={2}>
        {covids.map((covid) => (
          <Grid item key={covid} xs={12} sm={4} md={3}>
            <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: 2 }}>
              <Link to={`/detail/${covid}`}>
                <CardActionArea>
                  {countries.map(
                    (item) =>
                      item.Country === covid && (
                        <CardMedia
                          key={item.Country}
                          component="img"
                          image={`https://flagcdn.com/${item.iso}.svg`}
                          height="140"
                          alt={item.Country}
                          sx={{ opacity: 0.8 }}
                        />
                      )
                  )}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="white"
                    >
                      {covid.replaceAll("-", " ")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>

              <CardActions>
                <IconButton aria-label="share">
                  <ShareIcon sx={{ fill: "red" }} />
                </IconButton>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon sx={{ fill: "red" }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchFeed;
