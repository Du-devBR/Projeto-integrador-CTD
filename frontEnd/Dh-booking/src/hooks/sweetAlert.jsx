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

export const sweetAlertCancel = async (message) => {
  const sweet = await Swal.fire({
    title: 'Sair da conta',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ff9800',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    position: 'top-end'
  })
  return sweet.isConfirmed
}
