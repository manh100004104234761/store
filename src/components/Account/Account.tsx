import React, { useState } from "react";
import { Tabs, Tab, Divider, colors, makeStyles } from "@material-ui/core";
import { Profile, Security } from "./components";
import Title from "../Title/Title";

const useStyles = makeStyles((theme) => ({
  root: {},
  tabs: {
    marginTop: theme.spacing(3),
  },
  divider: {
    backgroundColor: colors.grey[300],
  },
  content: {
    marginTop: theme.spacing(3),
  },
}));

interface Props {}
const tabs = [
  { value: "profile", label: "Profile" },
  { value: "security", label: "Security" },
];

const Account = (props: Props) => {
  const classes = useStyles();
  const [tab, setTab] = useState("profile");

  return (
    <div className={classes.root}>
      <Title title="Account" subTitle="Change your information" />
      <Tabs
        className={classes.tabs}
        scrollButtons="auto"
        value={tab}
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            onClick={() => setTab(tab.value)}
          />
        ))}
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === "profile" && <Profile />}
        {tab === "security" && <Security />}
      </div>
    </div>
  );
};

export default Account;
