import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Stack, Box, CardActionArea, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import { countries } from "../utils/constants";

const CovidCard = ({ item }) => {
  return (
    <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: { xs: 0, sm: 4 } }}>
      <Link to={`detail/${item.country}`}>
        <CardActionArea>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              height={60}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#FC1503"
                  mr={1}
                  fontWeight="bold"
                  mb={0}
                >
                  {item.country.slice(0, 12).replaceAll("-", " ")}
                </Typography>
                {countries.map(
                  (country) =>
                    country.Country === item.country && (
                      <CardMedia
                        key={country.Country}
                        component="img"
                        image={`https://flagcdn.com/${country.iso}.svg`}
                        alt={item.Country}
                        sx={{ width: "30px" }}
                      />
                    )
                )}
              </Box>

              <Typography variant="body1" color="gray" sx={{ fontSize: 12 }}>
                {item.continent}
              </Typography>
            </Stack>
            <Typography variant="body1" color="#fff" fontWeight="bold">
              New cases:{" "}
              <span style={{ color: "#009688" }}>
                {item.cases.new === null
                  ? "---"
                  : "+" + parseInt(item.cases.new.slice(1)).toLocaleString()}
              </span>
            </Typography>
            <Typography variant="body1" color="#fff" fontWeight="bold">
              New deaths:{" "}
              <span style={{ color: "#b71c1c" }}>
                {item.deaths.new === null
                  ? "---"
                  : "+" + parseInt(item.deaths.new.slice(1)).toLocaleString()}
              </span>
            </Typography>
            <Typography variant="body1" color="#fff" fontWeight="bold">
              Recovered:{" "}
              <span style={{ color: "#00c853" }}>
                {item.cases.recovered === null
                  ? "---"
                  : parseInt(item.cases.recovered).toLocaleString()}
              </span>
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              mt={2}
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="div"
                color="#fff"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                Population:{" "}
                {item.population === null
                  ? "---"
                  : parseInt(item.population).toLocaleString()}
              </Typography>
              {/* <Typography
              variant="h5"
              component="div"
              color="#fff"
              sx={{ fontSize: '14px', fontWeight: 'bold' }}
            >
              <span
                style={{
                  display: 'block',
                  width: '30px',
                  height: '30px',
                  border: '1px solid #fff',
                  textAlign: 'center',
                  lineHeight: 2.1,
                  borderRadius: '50%',
                }}
              >
                {item.rank}
              </span>
            </Typography> */}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CovidCard;
