import { Meta, Story } from "@storybook/react";
import { DateRangePickerComponent } from "..";
import { DateRangePickerProps } from "../components/DateRangePicker";
import React from 'react';

export default {
  title: "DateRangePicker",
  component: DateRangePickerComponent,
} as Meta;

const Template: Story<DateRangePickerProps> = (args) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <DateRangePickerComponent {...args} />
    </div>
  );
};

const Template2: Story<DateRangePickerProps> = (args) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <DateRangePickerComponent {...args} footer={(
        <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width: '100%'}}>text</div>
      )} />
    </div>
  );
};

export const Default = Template.bind({});

export const Footer = Template2.bind({});