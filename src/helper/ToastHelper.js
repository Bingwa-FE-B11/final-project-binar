import toast from "react-hot-toast";

const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
  });
};

const showErrorToast = (message) => {
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
  });
};

const showLoadingToast = (message) => {
  toast.loading(message, {
    duration: 3000,
    position: 'top-right',
  })
}

export { showSuccessToast, showErrorToast, showLoadingToast };
