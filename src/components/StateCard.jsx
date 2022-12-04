import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Typography from "@mui/material/Typography";
import moment from "moment";

const StateCard = ({ state }) => {
  return (
    <Card sx={{ backgroundColor: "#1e1e1e", borderRadius: { xs: 0, sm: 4 } }}>
      <CardContent>
        <Typography variant="h5" component="div" color="#fff">
          {moment(state.day).format("LL")}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ mb: 1.5, fontSize: 12 }}
          color="gray"
        >
          Updated at {moment(state.time).format("LTS")}
        </Typography>
        <Typography variant="body2" color="gray">
          Total cases: {parseInt(state.cases.total).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          New cases: +{parseInt(state.cases.new).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          Total deaths: {parseInt(state.deaths.total).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          New deaths: +{parseInt(state.deaths.new).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          Recovered: {parseInt(state.cases.recovered).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          Critical: +{parseInt(state.cases.critical).toLocaleString()}
        </Typography>
        <Typography variant="body2" color="gray">
          Total tests: {parseInt(state.tests.total).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon sx={{ fill: "#FC1503" }} />
        </IconButton>
        <IconButton aria-label="sad">
          <SentimentVeryDissatisfiedIcon sx={{ fill: "#FC1503" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default StateCard;
