import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import "./sidebar.css";
import Dashboard from "./Dashboard";

export default function Sidebar() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
        sx={{ minWidth: 300, height: 400 }}
    >
      <TabList className="tab-cont">
        <Tab className="tabcolor">First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0}>
        <Dashboard/>
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
