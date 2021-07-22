import * as React from "react";

import { DATE_RANGE_ACTIONS, MONTHS, WEEK_DAYS } from "../consts";
import { DefinedRanges } from "../types";
import { parseOptionalDate } from "../utils";

interface DateRangePickerState {
  months: string[];
  weekDays: string[];
  actions: DefinedRanges;
  setActions: React.Dispatch<React.SetStateAction<DefinedRanges>>;
  setDaysOfWeek: React.Dispatch<React.SetStateAction<string[]>>;
  setMonths: React.Dispatch<React.SetStateAction<string[]>>;
  getMonth: (date: Date) => string;
  getYear: (date: Date) => number;
}

const DateRangePickerContext = React.createContext<DateRangePickerState>(undefined);

export const DateRangePickerProvider = ({ children }: { children: React.ReactNode }) => {
  const [actions, setActions] = React.useState(DATE_RANGE_ACTIONS);
  const [weekDays, setDaysOfWeek] = React.useState(WEEK_DAYS);
  const [months, setMonths] = React.useState(MONTHS);

  const getMonth = React.useCallback((date: Date) => months[parseOptionalDate(date, date).getMonth()], [months]);
  const getYear = React.useCallback((date: Date) => parseOptionalDate(date, date).getFullYear(), []);

  return (
    <DateRangePickerContext.Provider
      value={{ actions, weekDays, months, setActions, setDaysOfWeek, setMonths, getMonth, getYear }}
    >
      {children}
    </DateRangePickerContext.Provider>
  );
};

export const useDateRangeContext = () => {
  const context = React.useContext(DateRangePickerContext);
  if (context === undefined) {
    throw new Error("useDateRangeContext can only be used inside DateRangePickerProvider");
  }
  return context;
};
