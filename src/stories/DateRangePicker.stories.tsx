// @ts-ignore
import { Meta, Story } from "@storybook/react";
import { DateRangePickerComponent } from "..";
import { DateRangePickerProps } from "../components/DateRangePicker";
import React, { useCallback, useRef, useState } from 'react';
import { Popover } from "@material-ui/core";

export default {
  title: "DateRangePicker",
  component: DateRangePickerComponent,
} as Meta;

const Template: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <DateRangePickerComponent {...args} />
    </div>
  );
};

const Template2: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <DateRangePickerComponent {...args} footer={(
        <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width: '100%'}}>text</div>
      )} />
    </div>
  );
};

const Template3: Story<DateRangePickerProps> = (args: DateRangePickerProps) => {
  const parentRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);


  const onClickCallback = useCallback(
    () => {
      setOpen(prev => !prev);
    },
    [],
  );

  return (
    <div style={{display: "flex"}}>
      <div ref={parentRef}>
        <div onClick={onClickCallback}>
          Open Calendar
        </div>
        <Popover
          open={open}
          onClose={() => {setOpen(false);}}
          anchorEl={parentRef.current}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <DateRangePickerComponent {...args} />
        </Popover>
      </div>
    </div>
  );
}

export const Default = Template.bind({});

export const Footer = Template2.bind({});

export const Dropdown = Template3.bind({});