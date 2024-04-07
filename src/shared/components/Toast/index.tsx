import * as S from './style';
interface ToastProps {
  message?: string;
  status?: 'error' | 'info';
}

const Toast = ({ message = '', status = 'info' }: ToastProps) => {
  return (
    <S.Container status={status} message={message}>
      <S.Span>{message}</S.Span>
    </S.Container>
  );
};

export default Toast;
