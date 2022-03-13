import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography
            backgroundColor="#FFF5EE"
            padding="4px 16px"
            borderRadius="15px"
            color="#012C57"
            fontWeight="500"
            fontStyle="normal"
            fontSize="24px"
            lineHeight="26px"
            align="center"
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const ScrollableTabsButtonVisible = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} spacing={5}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            fontSize: "30px !important",
            fontWeight: "900",
            color: "green",
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
        >
          <Tab label="Today" {...a11yProps(0)} />
          <Tab label="Tomorrow" {...a11yProps(1)} />
          <Tab label="Jan, 31" {...a11yProps(2)} />
          <Tab label="Feb, 1" {...a11yProps(3)} />
          <Tab label="Feb, 2" {...a11yProps(4)} />
          <Tab label="Feb, 3" {...a11yProps(5)} />
          <Tab label="Feb, 4" {...a11yProps(6)} />
          <Tab label="Feb, 5" {...a11yProps(7)} />
          <Tab label="Feb, 5" {...a11yProps(7)} />
        </Tabs>
      </Box>

      <Grid display="flex" width="100%" justifyContent="space-between">
        <Grid>
          <TabPanel value={value} index={0} backgroundColor="red">
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
        </Grid>
        <Grid>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <Typography>9:00 AM</Typography>{" "}
          </TabPanel>
        </Grid>

        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Grid>
    </Box>
  );
};
