import type { Meta, StoryObj } from "@storybook/react";

import { MuiAccordion } from "./Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Accordion",
  component: MuiAccordion,
} satisfies Meta<typeof MuiAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Playground: Story = {
  args: {},
};
