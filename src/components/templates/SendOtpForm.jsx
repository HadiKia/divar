import { useState } from "react";
import { sendOtp } from "services/auth";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";

import CloseIcon from "assets/icons/CloseIcon";

// styles
import {
  titleDivStyle,
  modalTitleStyle,
  authTitleStyle,
  authContentMessageStyle,
  inputBoxStyle,
  inputBoxSpanStyle,
  authContentMessage2Style,
  modalActionDivStyle,
  submitButtonStyle,
} from "styles/Send&CheckOtpFormStyle";

function SendOtpForm({ setStep, mobile, setMobile, closeModal, setIsActive }) {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 10 && mobile.length !== 11)
      return toast.error("لطفا شماره موبایل صحیح وارد کنید");
    setIsLoading(true);
    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) toast.error("مشکلی پیش آمده است");
    setIsLoading(false);
  };

  return (
    <form onSubmit={submitHandler} className="md:h-[458px]">
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

      <p className={authTitleStyle}>شمارهٔ موبایل خود را وارد کنید</p>

      <p className={authContentMessageStyle}>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </p>

      <div className={inputBoxStyle}>
        <input
          type="number"
          placeholder="شمارهٔ موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="pl-14 mb-5"
        />
        <span className={inputBoxSpanStyle}>۹۸+</span>
      </div>

      <p className={authContentMessage2Style}>
        <span className="text-primary">شرایط استفاده از خدمات</span> و{" "}
        <span className="text-primary">حریم خصوصی</span> دیوار را می‌پذیرم.
      </p>

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
            "تأیید"
          )}
        </button>
      </div>
    </form>
  );
}

export default SendOtpForm;
