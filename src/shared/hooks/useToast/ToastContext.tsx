import { ReactNode, createContext, useEffect, useState } from 'react';
import Toast from '../../components/Toast';
import { ToastProps } from '@/shared/types/toast';

interface ToastContextValues {
  showToast: ({ message, status }: ToastProps) => void;
}

export const ToastContext = createContext<ToastContextValues>({
  showToast: () => {},
});

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const TIME_OUT = 3000;
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = ({ message, status }: ToastProps) => {
    setToast({ message, status });
  };

  useEffect(() => {
    if (toast) {
      const timeoutId = setTimeout(() => {
        setToast(null);
      }, TIME_OUT);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toast]);

  const context = { showToast };

  return (
    <ToastContext.Provider value={context}>
      {children}
      <Toast message={toast?.message} status={toast?.status} />
    </ToastContext.Provider>
  );
};
