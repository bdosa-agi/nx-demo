import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonComponent } from './button.component';

const Story: ComponentMeta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default Story;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = { label: 'Button' };
