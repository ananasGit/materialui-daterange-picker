// @ts-ignore
import { Popover } from "@material-ui/core";
import { Meta, Story } from "@storybook/react";
import React, { useCallback, useRef, useState } from "react";

import { DateRangePicker } from "..";
import { DateRangePickerProps } from "../components/DateRangePicker";
import { DateRange } from "../types";

export default {
  title: "DateRangePicker",
  component: DateRangePicker,
} as Meta;

const Template: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <DateRangePicker {...args} />
    </div>
  );
};

const Template2: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRange>();

  const randomDate = (start: Date, end: Date): Date => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        onClick={() => {
          setValue({
            startDate: randomDate(new Date("1-1-2021"), new Date("6-31-2021")),
            endDate: randomDate(new Date("7-1-2021"), new Date("12-31-2021")),
          });
        }}
      >
        Change date
      </div>
      <DateRangePicker
        {...args}
        value={value}
        onChange={setValue}
        footer={
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>text</div>
        }
      />
    </div>
  );
};

const Template3: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  const parentRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  const onClickCallback = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div ref={parentRef}>
        <div onClick={onClickCallback}>Open Calendar</div>
        <Popover
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          anchorEl={parentRef.current}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <DateRangePicker {...args} />
        </Popover>
      </div>
    </div>
  );
};

export const Default = Template.bind({});

export const Footer = Template2.bind({});

export const Dropdown = Template3.bind({});

export const Localization = Template.bind({});
Localization.args = {
  months: [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar",
  ],
  actions: {
    today: "Danas",
  },
  weekDays: ["Pon", "Ut", "Sr", "Cet", "Pet", "Sub", "Ned"],
};
