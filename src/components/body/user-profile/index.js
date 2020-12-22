import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
//importing local file
import "./style/user.css";
import "./style/my-post.css";
import Header from "./Header";
import MyPost from "./MyPost";
import TabPanel, { a11yProps } from "common/tabs/TabPanel";
import { pageTransition } from "common/page-transition/configVarian";
import { userProfileQueries } from "query/user-profile";
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
  const idUser = useSelector((state) => state.login.data.id);
  const { data, loading, error } = useQuery(userProfileQueries.GET_PERONAL_TOPIC, {
    variables: {
      id: idUser
    }
  })
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {

  }, [data, loading, error])
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
            {/* this tab show personal topic */}
            <TabPanel value={value} index={0}>
              {
                !!data && data.allTopics.map((post, index) => <MyPost key={index} {...post} />)
              }

            </TabPanel>
            <TabPanel value={value} index={1}>
              <h5>.</h5>
              <h5>.</h5>
              <h5>.</h5>
              <h5>Comming soon !!</h5>
              <h5>.</h5>
              <h5>.</h5>
              <h5>.</h5>

            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </motion.div>
  );
}
