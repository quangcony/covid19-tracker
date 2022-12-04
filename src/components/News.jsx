import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Box, Button, Stack } from "@mui/material";

import { NewsCard, BackToTop } from "../components";

import { coronaVirusApi } from "../utils/fetchApi";

const News = () => {
  const [news, setNews] = useState([]);
  const { Category } = useParams();
  const [page, setPage] = useState(0);

  useEffect(() => {
    coronaVirusApi(`news/get-${Category}/${page}`).then((data) =>
      setNews(data.news)
    );
  }, [Category]);

  const loadMore = () => {
    const nextPage = page + 1;
    coronaVirusApi(`news/get-${Category}/${nextPage}`).then((data) =>
      setNews([...news, ...data.news])
    );
    setPage(page + 1);
  };

  if (!news) return "Loading...";

  return (
    <Stack px={2} sx={{ minHeight: "92vh", overflowY: "auto" }}>
      <Grid container spacing={2}>
        {news.map((post) => (
          <Grid key={post.news_id} item xs={12} sm={4} md={3}>
            <NewsCard post={post} />
          </Grid>
        ))}
      </Grid>
      <Box mx="auto" py={2}>
        <Button
          variant="outlined"
          onClick={loadMore}
          sx={{
            color: "#FC1503",
            borderColor: "#9b140a",
            ":hover": { borderColor: "#FC1503" },
          }}
        >
          Load More
        </Button>
      </Box>
      <BackToTop />
    </Stack>
  );
};

export default News;
