import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCategory } from "services/admin";

// styles
import {
  buttonDivStyle,
  formButtonStyle,
  formStyle,
  h3Style,
  inputBoxStyle,
  labelStyle,
} from "styles/categoryFormStyle";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });
  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    console.log(form);
  };
  return (
    <form onChange={changeHandler} className={formStyle}>
      <h3 className={h3Style}>افزودن آگهی</h3>

      <div className={inputBoxStyle}>
        <input
          type="text"
          name="title"
          id="title"
          className="peer"
          placeholder=""
        />
        <label htmlFor="title" className={labelStyle}>
          عنوان
        </label>
      </div>

      <div className={inputBoxStyle}>
        <textarea
          type="text"
          name="content"
          id="content"
          className="peer h-28"
          placeholder=""
        />
        <label htmlFor="content" className={labelStyle}>
          توضیحات
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input
          type="number"
          name="amount"
          id="amount"
          className="peer"
          placeholder=""
        />
        <label htmlFor="amount" className={labelStyle}>
          مبلغ
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input
          type="text"
          name="city"
          id="city"
          className="peer"
          placeholder=""
        />
        <label htmlFor="city" className={labelStyle}>
          شهر
        </label>
      </div>

      <div className={inputBoxStyle}>
        <select
          type="text"
          name="category"
          id="category"
          className="peer appearance-none"
          placeholder=""
        >
          {data?.data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="category" className={labelStyle}>
          دسته بندی
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input
          type="file"
          name="images"
          id="images"
          className="peer"
          placeholder="عکس خود را بارگزاری کنید"
        />
        <label htmlFor="images" className={labelStyle}>
          عکس
        </label>
      </div>

      <div className={buttonDivStyle}>
        <button onClick={addHandler} className={formButtonStyle}>
          ایجاد
        </button>
      </div>
    </form>
  );
}

export default AddPost;
