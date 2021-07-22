export interface DateRange {
  startDate?: Date;
  endDate?: Date;
}

export type Setter<T> = React.Dispatch<React.SetStateAction<T>> | ((value: T) => void);

export enum NavigationAction {
  // eslint-disable-next-line no-unused-vars
  Previous = -1,

  // eslint-disable-next-line no-unused-vars
  Next = 1,
}

export type DefinedRanges = {
  today?: string;
  yesterday?: string;
  thisWeek?: string;
  lastWeek?: string;
  last7Days?: string;
  thisMonth?: string;
  lastMonth?: string;
};

export type DefinedRange = {
  startDate: Date;
  endDate: Date;
  label: string;
};
