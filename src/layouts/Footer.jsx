import DivarIcon from "assets/icons/DivarIcon";

function Footer() {
  return (
    <footer>
      <div>
        <DivarIcon />
        <span>دربارهٔ دیوار</span>
        <span>پشتیبانی و قوانین</span>
        <span>اتاق خبر</span>
        <span>دریافت برنامه</span>
        <span>تماس با پشتیبانی</span>
      </div>

      <div>
        <p dir="ltr">
          Developed by
          <a href="https://github.com/HadiKia" target="_blank">
            Hadi Kia
          </a>
          with 🖤
        </p>
      </div>
    </footer>
  );
}

export default Footer;
