# Material UI DateRange Picker

A react date range picker implementation using @material-ui.

<a href='https://www.npmjs.com/package/materialui-daterange-picker'>
    <img src='https://img.shields.io/npm/v/materialui-daterange-picker.svg' alt='Latest npm version'>
</a>

## Preview

![Screenshot](/screenshot.png?raw=true "Screenshot")

## Usage

```bash
npm install @ananasgit/materialui-daterange-picker --save
```

## Basic example

```tsx
import React from "react";
import { DateRangePicker, DateRange } from "@ananasgit/materialui-daterange-picker";

type Props = {};

const App: React.FunctionComponent<Props> = (props) => {
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  return (
    <div>
      <div>
        Selected Date Range: {dateRange.startDate.toLocaleString()} - {dateRange.endDate.toLocaleString()}
      </div>
      <DateRangePicker value={dateRange} onChange={setDateRange} />
    </div>
  );
};

export default App;
```

## Types

```ts
interface DateRange {
  startDate?: Date;
  endDate?: Date;
}

interface DefinedRange {
  label: string;
  startDate: Date;
  endDate: Date;
}

type DefinedRanges = {
  today?: string;
  yesterday?: string;
  thisWeek?: string;
  lastWeek?: string;
  last7Days?: string;
  thisMonth?: string;
  lastMonth?: string;
};
```

## Props

| Name               | Type                  | Required   | Default value     | Description                                                     |
| :----------------- | :-------------------- | :--------- | :---------------- | :-------------------------------------------------------------- |
| `onChange`         | `(DateRange) => void` | _required_ | -                 | handler function for providing selected date range              |
| `value`            | `DateRange`           | _required_ | `{}`              | current selected date range                                     |
| `minDate`          | `Date` or `string`    | _optional_ | 10 years ago      | min date allowed in range                                       |
| `maxDate`          | `Date` or `string`    | _optional_ | 10 years from now | max date allowed in range                                       |
| `definedRanges`    | `DefinedRange[]`      | _optional_ | -                 | custom defined ranges to show in the list                       |
| `wrapperClassName` | `object`              | _optional_ | `undefined`       | defines additional wrapper style classes                        |
| `footer`           | `ReactNode`           | _optional_ | `undefined`       | custom footer component                                         |
| `months`           | `string[]`            | _optional_ | `undefined`       | translations for months                                         |
| `weekDays`         | `string[]`            | _optional_ | `undefined`       | translations for week days                                      |
| `actions`          | `DefinedRanges`       | _optional_ | `undefined`       | translations for actins, and enabling/disabling default actions |
