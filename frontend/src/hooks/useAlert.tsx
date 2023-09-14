import {
  showConfirmAlert,
  startLoadingAlert,
  stopLoadingAlert,
} from '@utils/SweetAlert';

const useAlert = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  isLoading: boolean,
  isSuccess: boolean,
  isError: boolean,
  reset: () => void,
  onFinished?: () => void
) => {
  isLoading && startLoadingAlert();

  if (isSuccess) {
    stopLoadingAlert();
    showConfirmAlert({
      title: 'Success',
      text: data.message,
      icon: 'success',
    });
    reset();
    onFinished?.();
  } else if (isError) {
    stopLoadingAlert();
    showConfirmAlert({
      title: 'error',
      text: error.data.message,
      icon: 'error',
    });
    reset();
    onFinished?.();
  }
};

export default useAlert;
