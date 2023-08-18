import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export enum TextAlign {
  RIGHT= 'right',
  LEFT = 'left',
  CENTER = 'center'
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  textTheme?: string
  align?: TextAlign
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    textTheme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
  } = props;

  return (
    <div className={classNames(cls.Text, { }, [className, cls[textTheme], cls[align]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
