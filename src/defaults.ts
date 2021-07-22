import { addDays, addMonths, addWeeks, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";

import { useDateRangeContext } from "./context";
import { DefinedRange } from "./types";

export const useDefinedRanges = (): DefinedRange[] => {
  const date = new Date();
  const { actions } = useDateRangeContext();

  const actionList = [];

  if (actions.today)
    actionList.push({
      label: actions.today,
      startDate: date,
      endDate: date,
    });

  if (actions.yesterday)
    actionList.push({
      label: actions.yesterday,
      startDate: addDays(date, -1),
      endDate: addDays(date, -1),
    });
  if (actions.thisWeek)
    actionList.push({
      label: actions.thisWeek,
      startDate: startOfWeek(date, { weekStartsOn: 1 }),
      endDate: endOfWeek(date, { weekStartsOn: 1 }),
    });
  if (actions.lastWeek)
    actionList.push({
      label: actions.lastWeek,
      startDate: startOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
      endDate: endOfWeek(addWeeks(date, -1), { weekStartsOn: 1 }),
    });
  if (actions.last7Days)
    actionList.push({
      label: actions.last7Days,
      startDate: addWeeks(date, -1),
      endDate: addDays(date, -1),
    });
  if (actions.thisMonth)
    actionList.push({
      label: actions.thisMonth,
      startDate: startOfMonth(date),
      endDate: endOfMonth(date),
    });
  if (actions.lastMonth)
    actionList.push({
      label: actions.lastMonth,
      startDate: startOfMonth(addMonths(date, -1)),
      endDate: endOfMonth(addMonths(date, -1)),
    });

  return actionList;
};
