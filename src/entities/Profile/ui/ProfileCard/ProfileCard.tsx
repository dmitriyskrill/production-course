import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { useSelector } from 'react-redux';
import { getProfileReadOnly } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  isLoading?: boolean
  readOnly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: string) => void
  onChangeCountry?: (value?: string) => void
}

export const ProfileCard = ({
  className,
  data,
  readOnly,
  error,
  isLoading,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text
          textTheme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля', { ns: 'profile' })}
          text={t('Попробуйте обновить страницу', { ns: 'profile' })}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }
  const mods: Mods = {
    [cls.editing]: !readOnly,
  };
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt="" />
          </div>
        )}
        <Input
          value={data?.first}
          placeholder={t('Ваше имя', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeFirstname}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeLastname}
        />
        <Input
          value={data?.age}
          placeholder={t('Ваш возраст', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAge}
        />
        <Input
          value={data?.city}
          placeholder={t('Ваш город', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeCity}
        />
        <Input
          value={data?.username}
          placeholder={t('Имя пользователя', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeUsername}
        />
        <Input
          value={data?.avatar}
          placeholder={t('Ваше фото', { ns: 'profile' })}
          className={cls.input}
          readOnly={readOnly}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={cls.input}
          value={data?.currency}
          onChange={onChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
