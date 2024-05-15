import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";
import { e2p } from "utils/numbers";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";

import CloseIcon from "assets/icons/CloseIcon";

// styles
import {
  authContentMessageStyle,
  authTitleStyle,
  changeNumberButtonStyle,
  changeNumberDivButtonStyle,
  modalActionDivStyle,
  modalTitleStyle,
  submitButtonStyle,
  titleDivStyle,
} from "styles/Send&CheckOtpFormStyle";

function CheckOtpForm({
  setStep,
  code,
  setCode,
  mobile,
  closeModal,
  setIsActive,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5)
      return toast.error("لطفا کد ۵ رقمی خود را وارد کنید");
    setIsLoading(true);
    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      toast.success("خوش آمدید");
      setCookie(response.data);
      refetch();
      closeModal();
      setIsActive("");
      setIsLoading(false);
    }
    if (error) toast.error("مشکلی پیش آمده است");
  };

  return (
    <form onSubmit={submitHandler} className="h-screen md:h-[408px]">
      <div className={titleDivStyle}>
        <p className={modalTitleStyle}>ورود به حساب کاربری</p>
        <span
          onClick={() => {
            closeModal();
            setIsActive("");
          }}
          className="text-secondary"
        >
          <CloseIcon />
        </span>
      </div>

      <p className={authTitleStyle}>کد تأیید را وارد کنید</p>

      <p className={authContentMessageStyle}>
        کد پیامک شده به شمارهٔ «{e2p(mobile)}» را وارد کنید.
      </p>
      <div className="mx-4 md:mx-8">
        <input
          type="number"
          placeholder="کد تأیید ۵ رقمی"
          value={code}
          autoFocus
          onChange={(e) => setCode(e.target.value)}
          className="mb-3"
        />
      </div>

      <div className={changeNumberDivButtonStyle}>
        <button onClick={() => setStep(1)} className={changeNumberButtonStyle}>
          تغییر شمارهٔ موبایل
        </button>
      </div>

      <div className={modalActionDivStyle}>
        <button type="submit" className={submitButtonStyle}>
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#fff"
              height={20}
              width={25}
              className="mb-1.5"
            />
          ) : (
            "ورود"
          )}
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
