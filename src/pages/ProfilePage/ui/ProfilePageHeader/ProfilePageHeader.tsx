import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
  getProfileReadOnly,
  updateProfileData,
  profileActions,
  getProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);
  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {
            readOnly
              ? (
                <Button
                  className={cls.editBtn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEdit}
                >
                  {t('Редактировать')}
                </Button>
              )
              : (
                <>
                  <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                  >
                    {t('Отменить')}
                  </Button>
                  <Button
                    className={cls.saveBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t('Сохранить')}
                  </Button>
                </>

              )
          }
        </div>
      )}

    </div>
  );
};
