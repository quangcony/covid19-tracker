import { Grid } from "@mui/material";
import { StateCard } from "../components";

const States = ({ states }) => {
  return (
    <Grid container spacing={2} mt={2}>
      {states.sort((a, b) => b.confirmed - a.confirmed) &&
        states.map((state, index) => (
          <Grid key={index} item xs={12} sm={4} md={3}>
            <StateCard state={state} />
          </Grid>
        ))}
    </Grid>
  );
};

export default States;
