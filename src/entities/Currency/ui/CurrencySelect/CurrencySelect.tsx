import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
  className?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const options = [
  { value: Currency.EUR, content: 'Евро' },
  { value: Currency.USD, content: 'Доллар' },
  { value: Currency.RUB, content: 'Рубль' },
];
export const CurrencySelect = memo(({
  value,
  readOnly,
  onChange,
  className,
}: CurrencySelectProps) => {
  const { t } = useTranslation();
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value);
  }, [onChange]);
  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите валюту', { ns: 'profile' })}
      options={options}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHandler}
    />
  );
});
