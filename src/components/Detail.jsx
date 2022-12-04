import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

import { fetchFromApi } from "../utils/fetchApi";

import { StatisticsCard, CountryCard, States, BackToTop } from "../components";

const Detail = () => {
  const [country, setCountry] = useState(null);
  const [states, setStates] = useState([]);
  const { CountryName } = useParams();
  const [day, setDay] = useState(new Date());

  useEffect(() => {
    fetchFromApi("history", {
      country: CountryName,
      day: moment(day).format("YYYY-MM-D"),
    }).then((data) => setStates(data.response));

    fetchFromApi("statistics", { country: CountryName }).then((data) =>
      setCountry(data)
    );
  }, [CountryName, day]);

  if (!country) return console.log("Loading...");

  return (
    <Box sx={{ minHeight: "92vh" }} pb={8}>
      <Box>
        <div
          className="bg-detail"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            height: "250px",
            zIndex: 10,
          }}
        />
        <CountryCard item={country} />
      </Box>
      <StatisticsCard
        item={country.response[0]}
        spacing={4}
        px={{ xs: 0, md: 10 }}
      />
      <Box px={{ xs: 0, sm: 2 }} mt={8}>
        <Typography variant="h5" color="#fff" mb={2}>
          <span style={{ color: "#FC1503" }}>{CountryName}</span> covid19
          history
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5" color="#fff">
            Select a day to watch:
          </Typography>
          <DatePicker
            selected={day}
            onChange={(date) => setDay(date)}
            customInput={
              <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                }}
              />
            }
          />
        </Box>

        <States states={states} />
      </Box>
      <BackToTop />
    </Box>
  );
};

export default Detail;
