import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import * as React from "react";

// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange } from "../types";
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
}

const DateRangePickerWrapper: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => {
  const classes = useStyles();

  const { wrapperClassName } = props;

  const wrapperClasses = classNames(classes.dateRangePicker, wrapperClassName);

  return (
    <div className={classes.dateRangePickerContainer}>
      <div className={wrapperClasses}>
        <DateRangePicker {...props} />
      </div>
    </div>
  );
};

export default DateRangePickerWrapper;
