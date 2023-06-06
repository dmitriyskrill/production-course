import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

interface TextProps {
  className?: string
  title?: string
  text?: string
  textTheme?: string
}

export const Text = (props: TextProps) => {
  const {
    className,
    title,
    text,
    textTheme = TextTheme.PRIMARY,
  } = props;

  return (
    <div className={classNames(cls.Text, { [cls[textTheme]]: true }, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};
