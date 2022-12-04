import { Typography, Grid, Card, CardContent } from "@mui/material";

const StatisticsCard = ({ item, spacing, px }) => {
  return (
    <Grid container spacing={spacing || 2} px={px || 0} mb={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#ff80ab" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              TOTAL CASES
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {parseInt(item.cases.total).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              new cases{" "}
              <strong>
                {item.cases.new === null
                  ? "---"
                  : "+" + parseInt(item.cases.new).toLocaleString()}
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#b9f6ca" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              TOTAL RECOVERED
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {parseInt(item.cases.recovered).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              new recovered <strong>---</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#e0e0e0 " }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              TOTAL DEATHS
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {parseInt(item.deaths.total).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              new deaths{" "}
              <strong>
                {item.deaths.new === null
                  ? "---"
                  : "+" + parseInt(item.deaths.new).toLocaleString()}
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#ff5722" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              SERIOUS CRITICAL
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {parseInt(item.cases.critical).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#006064" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              TOTAL TESTS
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {item.tests.total === null
                ? "---"
                : parseInt(item.tests.total).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: "#dfba22" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="body2">
              ACTIVE
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {parseInt(item.cases.active).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatisticsCard;
