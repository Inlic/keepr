import Swal from "sweetalert2"
export default class NotificationService {
  static async confirmDelete() {
    try {
      let res = await Swal.fire({
        title: "<h2 style='color:#6cc3d5'>Delete this item?</h2>",
        icon: 'warning',
        iconColor: "#ff7851",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonColor: "#6cc3d5",
        confirmButtonColor: "#ff7851",
        background: "#fff",
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
        title: `<h3 style="color:  #56cc9d">${title}</h3>`,
        icon: "success",
        iconColor: "#56cc9d",
        timer: timer,
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        background: "#fff"
      })
    } catch (error) {
      console.error(error)
    }
  }
}