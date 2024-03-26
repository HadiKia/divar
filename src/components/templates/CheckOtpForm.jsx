function CheckOtpForm({ setStep, code, setCode, mobile }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ mobile, code });
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
