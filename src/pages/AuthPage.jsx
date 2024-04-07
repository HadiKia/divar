import { useState } from "react";
import SendOtpForm from "components/templates/SendOtpForm";
import CheckOtpForm from "components/templates/CheckOtpForm";

function AuthPage({ closeModal, setIsActive }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} closeModal={closeModal} setIsActive={setIsActive} />
      )}
      {step === 2 && (
        <CheckOtpForm
          setStep={setStep}
          code={code}
          setCode={setCode}
          mobile={mobile}
          closeModal={closeModal}
          setIsActive={setIsActive}
        />
      )}
    </div>
  );
}

export default AuthPage;
