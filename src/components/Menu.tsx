import {
  Grid,
  makeStyles,
  Paper,
  // eslint-disable-next-line no-unused-vars
  Theme,
} from "@material-ui/core";
import { differenceInCalendarMonths } from "date-fns";
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
    onMonthNavigate: (action: NavigationAction) => void;
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
          <Grid container direction="row" justify="center" wrap="nowrap">
            <Month {...commonProps} value={firstMonth} setValue={setFirstMonth} navState={[true, canNavigateCloser]} />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
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
