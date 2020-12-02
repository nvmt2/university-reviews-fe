import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  large: {
    marginTop: 20,
    marginRight: 10,
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export default function NotificationCard(props) {
  const { name, src, status } = props;
  console.log("prop: ", props);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {status}
          </Typography>
        </CardContent>
      </div>
      <Avatar className={classes.large} src={src}>
        N
      </Avatar>
    </Card>
  );
}
