import { Toaster } from "react-hot-toast";

function ToasterComponent() {
  return (
    <Toaster
      toastOptions={{
        success: {
          className: "bg-[#417F56] text-white text-sm font-medium",
        },
        error: {
          className: "bg-[#be3737] text-white text-sm font-medium",
        },
      }}
    />
  );
}

export default ToasterComponent;
