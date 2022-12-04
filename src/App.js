import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Feed, Navbar, Detail, SearchFeed, News, WorldMap } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="search/:SearchTerm" exact element={<SearchFeed />} />
          <Route path="detail/:CountryName" exact element={<Detail />} />
          <Route path="news/:Category" exact element={<News />} />
          <Route path="coronavirus-world-map/" exact element={<WorldMap />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
