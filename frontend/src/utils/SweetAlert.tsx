import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const startLoadingAlert = () => {
  return MySwal.fire({
    title: 'Loading...',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,

    didOpen: () => {
      MySwal.showLoading();
    },
    didClose: () => {
      MySwal.close();
    },
  });
};

export const stopLoadingAlert = () => {
  return MySwal.close();
};

export const showConfirmAlert = ({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
}) => {
  return MySwal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};

export const showConfirmDialog = (message: string, action: () => void) => {
  MySwal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};

export default MySwal;
