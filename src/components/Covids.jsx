import { Grid } from "@mui/material";
import { CovidCard } from ".";

const Covids = ({ covids }) => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      {covids.sort((a, b) => b.cases.total - a.cases.total) &&
        covids.map(
          (item) =>
            item.population !== null && (
              <Grid item xs={12} sm={4} md={3} key={item.country}>
                <CovidCard item={item} />
              </Grid>
            )
        )}
    </Grid>
  );
};

export default Covids;
