import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CheckCircle } from "@mui/icons-material";

import { countries } from "../utils/constants";

const CountryCard = ({
  item: {
    parameters: { country },
    response,
  },
}) => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        margin: "0 auto",
        backgroundColor: "transparent",
        textAlign: "center",
        mt: "-80px",
      }}
    >
      {countries.map(
        (countryItem) =>
          countryItem.Country === country && (
            <CardMedia
              key={countryItem.Country}
              component="img"
              image={`https://flagcdn.com/${countryItem.iso}.svg`}
              alt={countryItem.Country}
              sx={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                mx: "auto",
                border: "1px solid #e3e3e3",
              }}
            />
          )
      )}
      <CardContent>
        <Typography variant="h4" fontWeight="bold" component="div" color="#fff">
          {country.replaceAll("-", " ")}
        </Typography>
        <Typography color="gray">
          {response[0].continent} <CheckCircle sx={{ fontSize: "14px" }} />
        </Typography>
        <Typography color="gray">
          Population: {parseInt(response[0].population).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
