import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputComponent } from './input.component';

const Story: ComponentMeta<typeof InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
};
export default Story;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = { label: 'Input' };
