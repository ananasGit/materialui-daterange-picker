import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import * as React from "react";
import { useEffect } from "react";

import { useDateRangeContext } from "../context";
// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange, DefinedRanges } from "../types";
import DateRangePicker from "./DateRangePicker";

const useStyles = makeStyles(() => ({
  dateRangePickerContainer: {
    position: "relative",
  },
  dateRangePicker: {
    position: "relative",
    zIndex: 1,
  },
}));

export interface DateRangePickerWrapperProps {
  value?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  onChange: (dateRange: DateRange) => void;
  wrapperClassName?: string;
  footer?: React.ReactNode;
  weekDays?: string[];
  months?: string[];
  actions?: DefinedRanges;
}

const DateRangePickerWrapper: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  const classes = useStyles();

  const { wrapperClassName } = props;

  const wrapperClasses = classNames(classes.dateRangePicker, wrapperClassName);

  const { setActions, setDaysOfWeek, setMonths } = useDateRangeContext();
  const { months, actions, weekDays } = props;

  useEffect(() => {
    if (months) setMonths(months);
    if (actions) setActions(actions);
    if (weekDays) setDaysOfWeek(weekDays);
  }, [months, actions, weekDays]);

  return (
    <div className={classes.dateRangePickerContainer}>
      <div className={wrapperClasses}>
        <DateRangePicker {...props} />
      </div>
    </div>
  );
};

export default DateRangePickerWrapper;
