// import React from 'react'
// import { ComponentMeta, ComponentStory } from '@storybook/react'
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
// import { Text, TextTheme } from './Text'
//
// export default {
//   title: 'shared/Text',
//   component: Text,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } as ComponentMeta<typeof Text>
//
// const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />
//
// export const Primary = Template.bind({})
// Primary.args = {
//   title: 'Title interesting',
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//    Atque blanditiis cumque debitis fugit nihil optio quam quibusdam saepe, vero voluptatem.`,
// }
//
// export const Error = Template.bind({})
// Error.args = {
//   title: 'Title interesting',
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//    Atque blanditiis cumque debitis fugit nihil optio quam quibusdam saepe, vero voluptatem.`,
//   textTheme: TextTheme.ERROR,
// }
//
// export const OnlyTitle = Template.bind({})
// OnlyTitle.args = {
//   title: 'Title interesting',
// }
//
// export const OnlyText = Template.bind({})
// OnlyText.args = {
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//    Atque blanditiis cumque debitis fugit nihil optio quam quibusdam saepe, vero voluptatem.`,
// }
//
// export const PrimaryDark = Template.bind({})
// PrimaryDark.args = {
//   title: 'Title interesting',
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//    Atque blanditiis cumque debitis fugit nihil optio quam quibusdam saepe, vero voluptatem.`,
// }
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
//
// export const OnlyTitleDark = Template.bind({})
// OnlyTitleDark.args = {
//   title: 'Title interesting',
// }
// OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]
//
// export const OnlyTextDark = Template.bind({})
// OnlyTextDark.args = {
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//    Atque blanditiis cumque debitis fugit nihil optio quam quibusdam saepe, vero voluptatem.`,
// }
// OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
