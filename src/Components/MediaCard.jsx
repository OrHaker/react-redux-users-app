import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
    width: 500,
  },
  btn: {
    color: "#ffffff",
    backgroundColor: "#2E3B55",
    "&:hover": {
      color: "#000000",
      backgroundColor: "rgba(100, 100, 100, 0.250)",
    },
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.firstName} {props.lastName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {props.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.history.push(`/users/1`)}
          className={classes.btn}
        >
          Return to users
        </Button>
      </CardActions>
    </Card>
  );
}
