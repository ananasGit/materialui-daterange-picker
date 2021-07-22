import { addMonths, addYears, isAfter, isBefore, isSameDay, isSameMonth, isWithinRange, max, min } from "date-fns";
import * as React from "react";

import { useDefinedRanges } from "../defaults";
// eslint-disable-next-line no-unused-vars
import { DateRange, DefinedRange, NavigationAction } from "../types";
import { getValidatedMonths, parseOptionalDate } from "../utils";
import Menu from "./Menu";

export interface DateRangePickerProps {
  value?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  footer?: React.ReactNode;
  onChange: (dateRange: DateRange) => void;
}

const DateRangePicker: React.FunctionComponent<DateRangePickerProps> = (props: DateRangePickerProps) => {
  const today = new Date();

  const { onChange, value, minDate, maxDate, definedRanges: df, footer } = props;

  const defaultDefinedRanges = useDefinedRanges();
  const definedRanges = df ?? defaultDefinedRanges;

  const minDateValid = parseOptionalDate(minDate, addYears(today, -10));
  const maxDateValid = parseOptionalDate(maxDate, addYears(today, 10));
  const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(value || {}, minDateValid, maxDateValid);

  const [dateRange, setDateRange] = React.useState<DateRange>({ ...value });
  const [hoverDay, setHoverDay] = React.useState<Date>();
  const [firstMonth, setFirstMonth] = React.useState<Date>(intialFirstMonth || today);
  const [secondMonth, setSecondMonth] = React.useState<Date>(initialSecondMonth || addMonths(firstMonth, 1));

  const { startDate, endDate } = dateRange;

  React.useEffect(() => {
    setDateRange({ ...value });

    const [intialFirstMonth, initialSecondMonth] = getValidatedMonths(value || {}, minDateValid, maxDateValid);
    setFirstMonth(intialFirstMonth || today);
    setSecondMonth(initialSecondMonth || addMonths(firstMonth, 1));
  }, [value]);

  // handlers
  const setFirstMonthValidated = (date: Date) => {
    if (isBefore(date, secondMonth)) {
      setFirstMonth(date);
    }
  };

  const setSecondMonthValidated = (date: Date) => {
    if (isAfter(date, firstMonth)) {
      setSecondMonth(date);
    }
  };

  const setDateRangeValidated = (range: DateRange) => {
    let { startDate: newStart, endDate: newEnd } = range;

    if (newStart && newEnd) {
      range.startDate = newStart = max(newStart, minDateValid);
      range.endDate = newEnd = min(newEnd, maxDateValid);

      setDateRange(range);
      onChange(range);

      setFirstMonth(newStart);
      setSecondMonth(isSameMonth(newStart, newEnd) ? addMonths(newStart, 1) : newEnd);
    } else {
      const emptyRange = {};

      setDateRange(emptyRange);
      onChange(emptyRange);

      setFirstMonth(today);
      setSecondMonth(addMonths(firstMonth, 1));
    }
  };

  const onDayClick = (day: Date) => {
    if (startDate && !endDate && !isBefore(day, startDate)) {
      const newRange = { startDate, endDate: day };
      onChange(newRange);
      setDateRange(newRange);
    } else {
      setDateRange({ startDate: day, endDate: undefined });
    }
    setHoverDay(day);
  };

  const onMonthNavigate = (action: NavigationAction) => {
    const firstNew = addMonths(firstMonth, action);
    const secondNew = addMonths(secondMonth, action);
    if (isBefore(firstNew, secondNew)) setFirstMonth(firstNew);
    if (isBefore(firstNew, secondNew)) setSecondMonth(secondNew);
  };

  const onDayHover = (date: Date) => {
    if (startDate && !endDate) {
      if (!hoverDay || !isSameDay(date, hoverDay)) {
        setHoverDay(date);
      }
    }
  };

  // helpers
  const inHoverRange = (day: Date) =>
    startDate && !endDate && hoverDay && isAfter(hoverDay, startDate) && isWithinRange(day, startDate, hoverDay);

  const helpers = {
    inHoverRange,
  };

  const handlers = {
    onDayClick,
    onDayHover,
    onMonthNavigate,
  };

  return (
    <Menu
      dateRange={dateRange}
      minDate={minDateValid}
      maxDate={maxDateValid}
      ranges={definedRanges}
      firstMonth={firstMonth}
      secondMonth={secondMonth}
      setFirstMonth={setFirstMonthValidated}
      setSecondMonth={setSecondMonthValidated}
      setDateRange={setDateRangeValidated}
      helpers={helpers}
      handlers={handlers}
      footer={footer}
    />
  );
};

export default DateRangePicker;
