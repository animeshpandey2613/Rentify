import axios from "axios";
const MovieImporter = async () => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("Authentication")}`,
    },
  };
  const resp = await axios.get("https://main--burningmoonapi.netlify.app/api/movies", config);
  //   return resp.
  return resp.data
};

export { MovieImporter };
