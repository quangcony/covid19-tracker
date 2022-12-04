import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import MapChart from "./MapChart";
import { fetchFromApi } from "../utils/fetchApi";
import { countries } from "../utils/constants";

const WorldMap = () => {
  const [content, setContent] = useState("");
  const [covids, setCovids] = useState([]);

  useEffect(() => {
    fetchFromApi("statistics").then((data) => setCovids(data.response));
  }, []);

  if (!covids) return "Loading...";

  switch (content) {
    case "South Korea":
      setContent("S Korea");
      break;
    case "United Kingdom":
      setContent("UK");
      break;
    case "United States":
      setContent("USA");
      break;
    default:
      break;
  }

  return (
    <div style={{ width: "100%" }}>
      <MapChart setTooltipContent={setContent} />
      {covids.map(
        (covid, index) =>
          covid.country.replaceAll("-", " ") === content && (
            <ReactTooltip key={index} padding="0px">
              <Card sx={{ width: 186, borderRadius: 2 }}>
                {countries.map(
                  (country) =>
                    country.Country.replaceAll("-", " ") === content && (
                      <CardMedia
                        key={country.Country}
                        component="img"
                        height="100"
                        image={`https://flagcdn.com/${country.iso}.svg`}
                        alt={country.Country}
                      />
                    )
                )}

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    position: "absolute",
                    top: 65,
                    left: 0,
                    width: "100%",
                    height: 45,
                    lineHeight: 1,
                    padding: "5px",

                    backgroundImage:
                      "linear-gradient(to top, black , rgba(0,0,0,0.5))",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {covid.country.replaceAll("-", " ")}
                </Typography>
                <CardContent
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    paddingLeft: 1,
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                    <span style={{ width: "82px", display: "inline-block" }}>
                      Confirmed:
                    </span>
                    <span style={{ color: "#009688" }}>
                      {covid.cases.total === null
                        ? "---"
                        : parseInt(covid.cases.total).toLocaleString()}
                    </span>
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    <span style={{ width: "82px", display: "inline-block" }}>
                      Deaths:
                    </span>
                    <span style={{ color: "#e91e63" }}>
                      {covid.deaths.total === null
                        ? "---"
                        : parseInt(covid.deaths.total).toLocaleString()}
                    </span>
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    <span style={{ width: "82px", display: "inline-block" }}>
                      Critical:
                    </span>
                    <span style={{ color: "#ff5722" }}>
                      {covid.cases.critical === null
                        ? "---"
                        : parseInt(covid.cases.critical).toLocaleString()}
                    </span>
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    <span style={{ width: "82px", display: "inline-block" }}>
                      Active:
                    </span>
                    <span style={{ color: "#ffeb3b" }}>
                      {covid.cases.active === null
                        ? "---"
                        : parseInt(covid.cases.active).toLocaleString()}
                    </span>
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    <span style={{ width: "82px", display: "inline-block" }}>
                      New Cases:
                    </span>
                    <span style={{ color: "#3f51b5" }}>
                      {covid.cases.new > 0
                        ? parseInt(covid.cases.new).toLocaleString()
                        : "---"}
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </ReactTooltip>
          )
      )}
    </div>
  );
};

export default WorldMap;
