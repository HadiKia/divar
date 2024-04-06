import { Link } from "react-router-dom";
import DivarIcon from "assets/icons/DivarIcon";

// styles
import {
  LinkStyle,
  LinksDivStyle,
  aStyle,
  borderStyle,
  footerStyle,
  logoStyle,
} from "styles/footerStyle";

function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={LinksDivStyle}>
        <Link to="/" className={logoStyle}>
          <DivarIcon />
        </Link>
        <span className={LinkStyle}>دربارهٔ دیوار</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>پشتیبانی و قوانین</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>اتاق خبر</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>دریافت برنامه</span>
        <span className={borderStyle}></span>
        <span className={LinkStyle}>تماس با پشتیبانی</span>
      </div>

      <div>
        <p dir="ltr" className="opacity-70">
          Developed by
          <a
            href="https://github.com/HadiKia"
            target="_blank"
            className={aStyle}
          >
            Hadi Kia
          </a>
          with 🖤
        </p>
      </div>
    </footer>
  );
}

export default Footer;
