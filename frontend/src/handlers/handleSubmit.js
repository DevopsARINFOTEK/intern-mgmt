import Swal from "sweetalert2";

const handleSubmit = async (e, navigate) => {
  e.preventDefault();

  await Swal.fire({
    icon: "success",
    title: "Application Submitted",
    text: "Internship application submitted successfully.",
    confirmButtonColor: "#1f5db8"
  });

  navigate("/allocation");
};

export default handleSubmit;