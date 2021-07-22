import { addDays, addMonths, addWeeks, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { useMemo } from "react";

import { useDateRangeContext } from "./context";
import { DefinedRange } from "./types";

export const useDefinedRanges = (): DefinedRange[] => {
  const date = new Date();
  const { actions } = useDateRangeContext();

  const actionList = useMemo(() => {
    const list = [];

    if (actions.today)
      list.push({
        label: actions.today,
        startDate: date,
        endDate: date,
      });
    if (actions.yesterday)
      list.push({
        label: actions.yesterday,
        startDate: addDays(date, -1),
        endDate: addDays(date, -1),
      });
    if (actions.thisWeek)
      list.push({
        label: actions.thisWeek,
        startDate: startOfWeek(date, { weekStartsOn: 1 }),
        endDate: endOfWeek(date, { weekStartsOn: 1 }),
      });
    if (actions.lastWeek)
      list.push({
        label: actions.lastWeek,
        startDate: startOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
        endDate: endOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
      });
    if (actions.last7Days)
      list.push({
        label: actions.last7Days,
        startDate: addWeeks(date, -1),
        endDate: addDays(date, -1),
      });
    if (actions.thisMonth)
      list.push({
        label: actions.thisMonth,
        startDate: startOfMonth(date),
        endDate: endOfMonth(date),
      });
    if (actions.lastMonth)
      list.push({
        label: actions.lastMonth,
        startDate: startOfMonth(addMonths(date, -1)),
        endDate: endOfMonth(addMonths(date, -1)),
      });

    return list;
  }, [actions]);

  return actionList;
};
