import Swal from "sweetalert2";

const CatchAsyncError = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response ? err.response.data.message : err.message,
      });
    }
  };
};

export default CatchAsyncError;
