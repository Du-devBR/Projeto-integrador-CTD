import Swal from 'sweetalert2'
import '../Style/variables.sass'

export const sweetAlertSuccess = (title, message, timer) => {
  Swal.fire({
    title: title,
    icon: 'success',
    text: message,
    timer: timer,
  })
}

export const sweetAlertWarning = async (message, title, btnConfirmText, btnCancelText, btnConfirmColor, btnCancelColor) => {
  const sweet = await Swal.fire({
    title: title,
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: btnConfirmColor,
    cancelButtonColor: btnCancelColor,
    cancelButtonText: btnCancelText,
    confirmButtonText: btnConfirmText,
    position: 'top-end'
  })
  return sweet.isConfirmed
}
