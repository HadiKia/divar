import { useQuery } from "@tanstack/react-query";
import { checkOtp } from "services/auth";
import { getProfile } from "services/user";
import { setCookie } from "utils/cookie";
import CloseIcon from "assets/icons/CloseIcon";

// styles
import {
  authContentMessageStyle,
  authTitleStyle,
  changeNumberButtonStyle,
  changeNumberDivButtonStyle,
  checkOtpInputStyle,
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
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
      refetch();
      closeModal();
      setIsActive("");
    }
    if (error) console.log(error.response.data.message);
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
        کد پیامک شده به شمارهٔ «{mobile}» را وارد کنید.
      </p>
      <div className="mx-4 md:mx-8">
        <input
          type="text"
          placeholder="کد تأیید ۶ رقمی"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className={checkOtpInputStyle}
        />
      </div>

      <div className={changeNumberDivButtonStyle}>
        <button onClick={() => setStep(1)} className={changeNumberButtonStyle}>
          تغییر شمارهٔ موبایل
        </button>
      </div>

      <div className={modalActionDivStyle}>
        <button type="submit" className={submitButtonStyle}>
          ورود
        </button>
      </div>
    </form>
  );
}

export default CheckOtpForm;
