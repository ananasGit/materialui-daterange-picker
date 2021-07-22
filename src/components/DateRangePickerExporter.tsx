import { StylesProvider } from "@material-ui/core/styles";
import * as React from "react";

import { DateRangePickerProvider } from "../context";
import generateClassName from "../generateClassName";
// eslint-disable-next-line no-unused-vars
import DateRangePickerWrapper, { DateRangePickerWrapperProps } from "./DateRangePickerWrapper";

const DateRangePickerExporter: React.FunctionComponent<DateRangePickerWrapperProps> = (
  props: DateRangePickerWrapperProps,
) => (
  <StylesProvider generateClassName={generateClassName}>
    <DateRangePickerProvider>
      <DateRangePickerWrapper {...props} />
    </DateRangePickerProvider>
  </StylesProvider>
);

export default DateRangePickerExporter;
