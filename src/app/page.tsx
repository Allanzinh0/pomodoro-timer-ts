import { ToastContainer } from "react-toastify";

import Container from "@/components/Container";
import Timer from "@/components/Timer";

import "react-toastify/ReactToastify.min.css"

export default function Home() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Container>
        <Timer/>
      </Container>
    </>
  );
}
