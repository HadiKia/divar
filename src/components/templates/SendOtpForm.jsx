function SendOtpForm({ setStep, mobile, setMobile }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("send");
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>

      <p>شماره موبایل خود را وارد کنید</p>

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

      <button type="submit">تأیید</button>
    </form>
  );
}

export default SendOtpForm;
