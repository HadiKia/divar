import notFoundImage from "assets/images/404.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container max-w-[1440px] mx-auto px-4 text-secondary flex flex-col items-center text-center md:min-h-[calc(100vh_-_110px)]">
      <img src={notFoundImage} alt="پیدا نشد" className="w-[180px] mb-12" />
      <p className="mb-8 text-2xl">این راه به جایی نمی‌رسد!</p>

      <p className="mb-2">به نظر آدرس را اشتباه وارد کرده‌اید.</p>
      <p>
        برای پیدا کردن مسیر درست می‌توانید سری به{" "}
        <Link to="/" className="text-primary">
          صفحهٔ اول
        </Link>{" "}
        دیوار بزنید.
      </p>
    </div>
  );
}

export default PageNotFound;
