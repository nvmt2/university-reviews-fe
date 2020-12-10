import React from "react";
//importing local file
import "./style/user.css";
import "./style/my-post.css";
import Header from "./Header";
import MyPost from "./MyPost";
import PinPost from "./PinPost";
//material-ui
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="user">
      <Header />
      <form method="GET">
        <label>Mien Trung</label>
        <input type="radio" id="trung" name="zone" value="Mien Trung" />
        <input type="submit" value="Submit" />
      </form>
      <div className="container main-user">
        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Item One"
              {...a11yProps(0)} // option, it's helpful for SEO
            />
            <Tab label="Item Two" {...a11yProps(1)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"} //option, it's helpful for SEO
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0}>
              <MyPost />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <PinPost />
              <PinPost />
              <PinPost />
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
