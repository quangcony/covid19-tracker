import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Covids, StatisticsCard } from "../components";
import { fetchFromApi } from "../utils/fetchApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryDisplay, setCategoryDisplay] = useState("");
  const [covids, setCovids] = useState([]);

  useEffect(() => {
    fetchFromApi("statistics").then((data) => setCovids(data.response));
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setCategoryDisplay={setCategoryDisplay}
        />
      </Box>
      <Box
        sx={{
          height: {
            md: "90vh",
          },
          overflowY: "auto",
          px: { xs: 0, md: 2 },
          flex: 2,
        }}
      >
        {covids.map((covid) =>
          selectedCategory === ""
            ? covid.continent === "All" &&
              covid.country === "All" && <StatisticsCard item={covid} />
            : covid.continent === selectedCategory &&
              covid.country === selectedCategory && (
                <StatisticsCard item={covid} />
              )
        )}

        <Typography
          mb={2}
          variant="h5"
          fontWeight="bold"
          sx={{ color: "#fff" }}
        >
          <span style={{ color: "#FC1503" }}>{categoryDisplay}</span> Covid19
        </Typography>

        <Covids
          covids={
            selectedCategory === ""
              ? covids
              : covids.filter((item) => item.continent === selectedCategory)
          }
        />
      </Box>
    </Stack>
  );
};

export default Feed;
