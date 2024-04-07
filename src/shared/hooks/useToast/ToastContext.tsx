import { ReactNode, createContext, useEffect, useState } from 'react';
import Toast from '../../components/Toast';

interface ShowToastType {
  status: 'info' | 'error';
  message: string;
}

interface ToastContextValues {
  showToast: ({ message, status }: ShowToastType) => void;
}

export const ToastContext = createContext<ToastContextValues>({
  showToast: () => {},
});

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const TIME_OUT = 3000;
  const [toast, setToast] = useState<ShowToastType | null>(null);

  const showToast = ({ message, status }: ShowToastType) => {
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
