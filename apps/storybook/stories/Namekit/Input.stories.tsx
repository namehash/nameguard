import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@namehash/namekit-react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    inputSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "number", "password"],
      },
    },
    asChild: { control: { disable: true } },
    className: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const PrimaryMedium: Story = {
  args: {
    variant: "primary",
    inputSize: "medium",
    type: "text",
    placeholder: "Primary Medium Input",
  },
};

export const SecondaryMedium: Story = {
  args: {
    variant: "secondary",
    inputSize: "medium",
    type: "email",
    placeholder: "Secondary Medium Input",
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: "primary",
    inputSize: "small",
    type: "number",
    placeholder: "Primary Small Input",
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: "secondary",
    inputSize: "small",
    type: "password",
    placeholder: "Secondary Small Input",
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: "primary",
    inputSize: "large",
    type: "text",
    placeholder: "Primary Large Input",
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: "secondary",
    inputSize: "large",
    type: "email",
    placeholder: "Secondary Large Input",
  },
};

export const CustomClass: Story = {
  args: {
    variant: "primary",
    inputSize: "medium",
    type: "text",
    placeholder: "Custom Class Input",
    className: "custom-class-name",
  },
};

export const WithSlotLeft: Story = {
  args: {
    variant: "primary",
    inputSize: "medium",
    type: "text",
    placeholder: "Say something",
    children: <Input.Slot>@</Input.Slot>,
  },
};

export const WithSlotRight: Story = {
  args: {
    variant: "primary",
    inputSize: "medium",
    type: "text",
    placeholder: "Say something",
    slotPosition: "right",
    children: <Input.Slot>@</Input.Slot>,
  },
};

export const WithSlotLeftSmall: Story = {
  args: {
    variant: "primary",
    inputSize: "small",
    type: "text",
    placeholder: "Say something",
    children: <Input.Slot>@</Input.Slot>,
  },
};
