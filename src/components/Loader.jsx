import DivarIcon from "assets/icons/DivarIcon";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black/30 grid place-items-center z-30">
      <div className="w-52 pt-6 pb-4 bg-white rounded-lg grid place-items-center gap-y-4 text-primary ">
        <span className="scale-[1.7]"><DivarIcon /></span>
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