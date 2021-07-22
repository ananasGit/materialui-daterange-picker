import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { isSameDay } from "date-fns";
import React from "react";

import { theme } from "../theme";
import { DateRange, DefinedRange } from "../types";

const useStyles = makeStyles(() => ({
  font: {
    fontFamily: theme.font.family.sans,
  },
}));

type DefinedRangesProps = {
  setRange: (range: DateRange) => void;
  selectedRange: DateRange;
  ranges: DefinedRange[];
};

const isSameRange = (first: DateRange, second: DateRange) => {
  const { startDate: fStart, endDate: fEnd } = first;
  const { startDate: sStart, endDate: sEnd } = second;
  if (fStart && sStart && fEnd && sEnd) {
    return isSameDay(fStart, sStart) && isSameDay(fEnd, sEnd);
  }
  return false;
};

const DefinedRanges: React.FunctionComponent<DefinedRangesProps> = ({
  ranges,
  setRange,
  selectedRange,
}: DefinedRangesProps) => {
  const classes = useStyles();
  return (
    <List>
      {ranges.map((range, idx) => (
        <ListItem button key={idx} onClick={() => setRange(range)}>
          <ListItemText
            className={classes.font}
            primaryTypographyProps={{
              variant: "body2",
              style: {
                fontWeight: isSameRange(range, selectedRange) ? theme.font.weight.bold : theme.font.weight.regular,
                color: isSameRange(range, selectedRange) ? theme.color.burningOrange : theme.color.dune,
              },
            }}
          >
            {range.label}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default DefinedRanges;
