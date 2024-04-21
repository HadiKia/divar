import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "services/admin";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";

// styles
import {
  formStyle,
  h3Style,
  inputBoxStyle,
  labelStyle,
  buttonDivStyle,
  formButtonStyle,
} from "styles/categoryFormStyle";

function CategoryForm() {
  const queryClient = useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const { mutate, isLoading, error } = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
      toast.success("دسته بندی با موفقیت افزوده شد");
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon)
      return toast.error("لطفا فرم را تکمیل کنید");
    mutate(form);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={submitHandler}
      className={formStyle}
    >
      <h3 className={h3Style}>دسته بندی جدید</h3>

      <div className={inputBoxStyle}>
        <input
          type="text"
          name="name"
          id="name"
          className="peer"
          placeholder="name"
        />
        <label htmlFor="name" className={labelStyle}>
          اسم دسته بندی
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input
          type="text"
          name="slug"
          id="slug"
          className="peer"
          placeholder="slug"
        />
        <label htmlFor="slug" className={labelStyle}>
          اسلاگ
        </label>
      </div>

      <div className={inputBoxStyle}>
        <input
          type="text"
          name="icon"
          id="icon"
          className="peer"
          placeholder="icon"
        />
        <label htmlFor="icon" className={labelStyle}>
          آیکون
        </label>
      </div>

      <div className={buttonDivStyle}>
        <button type="submit" className={formButtonStyle} disabled={isLoading}>
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#fff"
              height={20}
              width={25}
              className="mb-1.5"
            />
          ) : (
            "ایجاد"
          )}
        </button>
      </div>

      {!!error && <p className="bg-primary text-white">مشکلی پیش آمده است</p>}
    </form>
  );
}

export default CategoryForm;
