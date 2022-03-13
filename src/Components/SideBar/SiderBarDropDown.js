import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Radio, FormControlLabel, Grid, RadioGroup } from "@mui/material";

export const SideBarTabes = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        border={"none"}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          sx={{
            border: "none",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Proximity
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="AllCity(Jeddah)"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="AllCity(Jeddah)"
                control={<Radio />}
                label="All-City (Jeddah)"
              />
              <FormControlLabel value="5kms" control={<Radio />} label="5kms" />
              <FormControlLabel
                value="25kms"
                control={<Radio />}
                label="25kms"
              />
              <FormControlLabel
                value="50kms"
                control={<Radio />}
                label="50kms"
              />
              <FormControlLabel
                value="100kms"
                control={<Radio />}
                label="100kms"
              />
              <FormControlLabel
                value="Nation-Wide"
                control={<Radio />}
                label="Nation-Wide"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "53%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Sub-specialties
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Option1"
                control={<Radio />}
                label="Option 1"
              />
              <FormControlLabel
                value="Option2"
                control={<Radio />}
                label="Option 2"
              />
              <FormControlLabel
                value="Option3"
                control={<Radio />}
                label="Option 3"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Place
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Option1"
                control={<Radio />}
                label="Option 1"
              />
              <FormControlLabel
                value="Option2"
                control={<Radio />}
                label="Option 2"
              />
              <FormControlLabel
                value="Option3"
                control={<Radio />}
                label="Option 3"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Rank
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Option1"
                control={<Radio />}
                label="Option 1"
              />
              <FormControlLabel
                value="Option2"
                control={<Radio />}
                label="Option 2"
              />
              <FormControlLabel
                value="Option3"
                control={<Radio />}
                label="Option 3"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Examination Fees
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Option1"
                control={<Radio />}
                label="Option 1"
              />
              <FormControlLabel
                value="Option2"
                control={<Radio />}
                label="Option 2"
              />
              <FormControlLabel
                value="Option3"
                control={<Radio />}
                label="Option 3"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Title
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Option1"
                control={<Radio />}
                label="Option 1"
              />
              <FormControlLabel
                value="Option2"
                control={<Radio />}
                label="Option 2"
              />
              <FormControlLabel
                value="Option3"
                control={<Radio />}
                label="Option 3"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              color: "#012C57",
              fontWeight: "Bold",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Gender
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid display="flex" flexDirection="column">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
