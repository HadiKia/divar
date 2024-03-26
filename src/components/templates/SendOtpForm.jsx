import { useState } from "react";
import { sendOtp } from "../../services/auth";
import ReactLoading from "react-loading";

function SendOtpForm({ setStep, mobile, setMobile }) {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (mobile.length !== 11) return;
    setIsLoading(true);
    const { response, error } = await sendOtp(mobile);

    if (response) setStep(2);
    if (error) console.log(error.response.data.message);
    setIsLoading(false);
    console.log(response, error);
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>

      <p>شمارهٔ موبایل خود را وارد کنید</p>

      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </span>

      <input
        type="text"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <span>شرایط استفاده از خدمات و حریم خصوصی دیوار را می‌پذیرم.</span>

      <button type="submit">
        {isLoading ? (
          <ReactLoading type="bubbles" color="#A62626" height={20} width={25} />
        ) : (
          "تأیید"
        )}
      </button>
    </form>
  );
}

export default SendOtpForm;
