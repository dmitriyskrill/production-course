import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
  className?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

const options = [
  { value: Country.RUSSIA, content: 'Russia' },
  { value: Country.BELARUS, content: 'Belarus' },
  { value: Country.UKRAINE, content: 'Ukraine' },
];
export const CountrySelect = memo(({
  value,
  readOnly,
  onChange,
  className,
}: CountrySelectProps) => {
  const { t } = useTranslation();
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value);
  }, [onChange]);
  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Укажите страну', { ns: 'profile' })}
      options={options}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHandler}
    />
  );
});
