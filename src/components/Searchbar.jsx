import { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";

import { countries } from "../utils/constants";
import { Stack } from "@mui/system";

const Searchbar = () => {
  const [display, setDisplay] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length >= 3) {
      setDisplay(false);
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    } else {
      setDisplay(true);
    }
  };

  if (!countries) return "Loading...";

  return (
    <Stack sx={{ position: "relative" }}>
      <Paper
        mt={{ xs: 2, md: 0 }}
        onSubmit={handelSubmit}
        component="form"
        sx={{
          display: "flex",
          borderRadius: 20,
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <Autocomplete
          sx={{
            width: { xs: 220, md: 300 },
            backgroundColor: "transparent",
          }}
          freeSolo
          id="search-input"
          disableClearable
          options={countries}
          getOptionLabel={(option) => option.Country || ""}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.iso}.png`}
                srcSet={`https://flagcdn.com/w40/${option.iso}.png 2x`}
                alt=""
              />
              {option.Country.replaceAll("-", " ")}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                placeholder: "search by country...",
                value: searchTerm,
                style: { padding: "5px" },
                onSelect: (e) => setSearchTerm(e.target.value),
              }}
            />
          )}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
      {display && (
        <Typography
          component="div"
          color="white"
          mt={1}
          p={1}
          sx={{
            backgroundColor: "white",
            fontSize: "12px",
            position: "absolute",
            left: "10px",
            bottom: "-40px",
            color: "red",
          }}
        >
          The Search field must be at least 3 characters in length.
        </Typography>
      )}
    </Stack>
  );
};

export default Searchbar;
