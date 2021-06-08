import {
  Grid,
  makeStyles,
  Paper,
  // eslint-disable-next-line no-unused-vars
  Theme,
  Typography,
} from "@material-ui/core";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { differenceInCalendarMonths,format } from "date-fns";
import React from "react";

import { theme as customTheme } from "../theme";
import {
  // eslint-disable-next-line no-unused-vars
  DateRange,
  // eslint-disable-next-line no-unused-vars
  DefinedRange,
  // eslint-disable-next-line no-unused-vars
  NavigationAction,
  // eslint-disable-next-line no-unused-vars
  Setter,
} from "../types";
import { combine } from "../utils";
import { MARKERS } from "./DateRangePicker";
import DefinedRanges from "./DefinedRanges";
import Month from "./Month";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    padding: "20px 70px",
  },
  headerItem: {
    flex: 1,
    textAlign: "center",
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.action.hover}`,
    marginBottom: 12,
  },
  footer: {
    padding: "12px",
  },
  font: {
    fontFamily: customTheme.font.family.sans,
  },
}));

interface MenuProps {
  dateRange: DateRange;
  ranges: DefinedRange[];
  minDate: Date;
  maxDate: Date;
  firstMonth: Date;
  secondMonth: Date;
  setFirstMonth: Setter<Date>;
  setSecondMonth: Setter<Date>;
  setDateRange: Setter<DateRange>;
  helpers: {
    inHoverRange: (day: Date) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
  footer?: React.ReactNode;
}

const Menu: React.FunctionComponent<MenuProps> = (props: MenuProps) => {
  const classes = useStyles();

  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    footer,
  } = props;

  const { startDate, endDate } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange,
    minDate,
    maxDate,
    helpers,
    handlers,
  };
  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <Grid container className={combine(classes.header, classes.font)} alignItems="center">
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">
                {startDate ? format(startDate, "MMMM DD, YYYY") : "Start Date"}
              </Typography>
            </Grid>
            <Grid item className={classes.headerItem}>
              <ArrowRightAlt color="action" />
            </Grid>
            <Grid item className={classes.headerItem}>
              <Typography variant="subtitle1">{endDate ? format(endDate, "MMMM DD, YYYY") : "End Date"}</Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" justify="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
            />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
            />
          </Grid>
        </Grid>
        <div className={classes.divider} />
        <Grid container alignItems="center">
          <DefinedRanges selectedRange={dateRange} ranges={ranges} setRange={setDateRange} />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="flex-end" wrap="nowrap" className={classes.footer}>
        {footer}
      </Grid>
    </Paper>
  );
};

export default Menu;
