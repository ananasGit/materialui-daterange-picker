import * as React from "react";

import { DATE_RANGE_ACTIONS, MONTHS, WEEK_DAYS } from "../consts";
import { DefinedRanges } from "../types";

interface DateRangePickerState {
  months: string[];
  weekDays: string[];
  actions: DefinedRanges;
  setActions: React.Dispatch<React.SetStateAction<DefinedRanges>>;
  setDaysOfWeek: React.Dispatch<React.SetStateAction<string[]>>;
  setMonths: React.Dispatch<React.SetStateAction<string[]>>;
}

const DateRangePickerContext = React.createContext<DateRangePickerState>(undefined);

export const DateRangePickerProvider = ({ children }: { children: React.ReactNode }) => {
  const [actions, setActions] = React.useState(DATE_RANGE_ACTIONS);
  const [weekDays, setDaysOfWeek] = React.useState(WEEK_DAYS);
  const [months, setMonths] = React.useState(MONTHS);

  return (
    <DateRangePickerContext.Provider value={{ actions, weekDays, months, setActions, setDaysOfWeek, setMonths }}>
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
