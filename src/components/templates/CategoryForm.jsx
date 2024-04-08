import { useState } from "react";

// styles
import {
  formStyle,
  h3Style,
  inputBoxStyle,
  inputStyle,
  labelStyle,
  buttonDivStyle,
  formButtonStyle,
} from "styles/categoryFormStyle";

function CategoryForm() {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={formStyle}
    >
      <h3 className={h3Style}>دسته بندی جدید</h3>

      <div className={inputBoxStyle}>
        <input type="text" name="name" id="name" className={inputStyle} />
        <label htmlFor="name" className={labelStyle}>
          اسم دسته بندی
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input type="text" name="slug" id="slug" className={inputStyle} />
        <label htmlFor="slug" className={labelStyle}>
          اسلاگ
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input type="text" name="icon" id="icon" className={inputStyle} />
        <label htmlFor="icon" className={labelStyle}>
          آیکون
        </label>
      </div>

      <div className={buttonDivStyle}>
        <button type="submit" className={formButtonStyle}>
          ایجاد
        </button>
      </div>
    </form>
  );
}

export default CategoryForm;
