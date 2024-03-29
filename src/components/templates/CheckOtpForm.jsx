import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";

function CheckOtpForm({ setStep, code, setCode, mobile }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <p>کد تأیید را وارد کنید</p>
      <span>کد پیامک شده به شمارهٔ «{mobile}» را وارد کنید.</span>
      <input
        type="text"
        placeholder="کد تأیید ۶ رقمی"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>

      <button type="submit">ورود</button>
    </form>
  );
}

export default CheckOtpForm;
