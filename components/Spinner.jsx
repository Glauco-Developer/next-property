"use-client";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ spinner }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={spinner}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};
export default Spinner;
