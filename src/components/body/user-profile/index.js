import React from "react";
import { motion } from "framer-motion";
//importing local file
import "./style/user.css";
import "./style/my-post.css";
import Header from "./Header";
import MyPost from "./MyPost";
import PinPost from "./PinPost";
import TabPanel, { a11yProps } from "common/tabs/TabPanel";
import { pageTransition } from "common/page-transition/configVarian";
//material-ui
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
// import PropTypes from "prop-types";

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
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="user"
    >
      <Header />
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
              label="Bài viết đã đăng"
              {...a11yProps(0)} // option, it's helpful for SEO
            />
            <Tab label="Bài viết yêu thích" {...a11yProps(1)} />
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
    </motion.div>
  );
}
