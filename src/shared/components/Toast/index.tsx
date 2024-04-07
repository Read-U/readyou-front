import { ToastProps } from '@/shared/types/toast';
import * as S from './style';

const Toast = ({ message = '', status = 'info' }: Partial<ToastProps>) => {
  return (
    <S.Container status={status} message={message}>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};

export default Toast;
