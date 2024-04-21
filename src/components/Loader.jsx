import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black/30 grid place-items-center z-30">
      <div className="w-52 h-24 bg-white rounded-lg grid place-items-center">
        <ReactLoading
          type="bubbles"
          color="#A62626"
          height={40}
          width={40}
        />
      </div>
    </div>
  );
}

export default Loader;