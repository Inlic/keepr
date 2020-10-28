import Swal from "sweetalert2"
export default class NotificationService {
  static async confirmDelete() {
    try {
      let res = await Swal.fire({
        title: "<h2 style='color:#FF88FF'>Are You Sure?</h2>",
        icon: 'warning',
        iconColor: "#FF88FF",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonColor: "#81C8FF",
        confirmButtonColor: "#FF9900",
        background: "#171228",
      })
      if (res.value) {
        return true
      }
      return false
    } catch (error) {
      console.error(error)
    }
  }
  static async actionNotice(title = "You did a thing", timer = 1500) {
    try {
      Swal.fire({
        title: `<h3 style="color: #FF88FF">${title}</h3>`,
        icon: "success",
        iconColor: "#FF88FF",
        timer: timer,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        background: "#171228"
      })
    } catch (error) {
      console.error(error)
    }
  }
}