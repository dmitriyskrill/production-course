import { classNames } from 'shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND_INVERTED = 'backgroundInverted',
  BACKGROUND = 'background'
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props
  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }
  const additional = [className, cls[theme], cls[size]]
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
