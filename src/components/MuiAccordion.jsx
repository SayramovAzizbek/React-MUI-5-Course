import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MuiAccordion = () => {
  // If we want to open only one accordion use this function for it, if not then you have to remove function from accordions
  const [expanded, setExpanded] = useState("");

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            dolorum quas? Ex repudiandae, reiciendis enim rem suscipit ab, qui
            commodi maxime, officiis aut sint atque voluptatibus saepe
            cupiditate omnis earum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            dolorum quas? Ex repudiandae, reiciendis enim rem suscipit ab, qui
            commodi maxime, officiis aut sint atque voluptatibus saepe
            cupiditate omnis earum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            dolorum quas? Ex repudiandae, reiciendis enim rem suscipit ab, qui
            commodi maxime, officiis aut sint atque voluptatibus saepe
            cupiditate omnis earum.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAccordion;
