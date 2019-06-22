import React from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from '@material-ui/core/Grid';

const Home = () => {
  return (
    <Grid item xs={12}>
    <Typography align="center" variant="h4">
      Welcome!! <Icon>sentiment_very_satisfied</Icon>
    </Typography>
    </Grid>
  );
};

export default Home;
