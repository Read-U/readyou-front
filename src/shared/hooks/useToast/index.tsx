import { useContext } from 'react';
import { ToastContext } from './ToastContext';

const useToast = () => {
  const { showToast: toast } = useContext(ToastContext);
  if (!toast) {
    throw new Error('useToast must be used whthin a ToastProvider');
  }
  return toast;
};

export default useToast;
