import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

import { Listbox } from "@headlessui/react";

// icons
import CarIcon from "assets/icons/CarIcon";
import DigitalIcon from "assets/icons/DigitalIcon";
import GameIcon from "assets/icons/GameIcon";
import HomeIcon from "assets/icons/HomeIcon";
import PersonalIcon from "assets/icons/PersonalIcon";
import ServiceIcon from "assets/icons/ServiceIcon";

// styles
import {
  buttonDivStyle,
  formButtonStyle,
  formStyle,
  h3Style,
  inputBoxStyle,
  labelStyle,
} from "styles/categoryFormStyle";
import {
  listBoxButtonStyle,
  listBoxOptionsStyle,
  listBoxOptionStyle,
  listBoxOptionActiveStyle,
  inputFileBoxStyle,
  inputFileStyle,
  inputFileNameStyle,
} from "styles/addPostStyle";

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
  const [category, setCategory] = useState("");
  const [imageLabel, setImageLabel] = useState("عکس خود را بارگزاری کنید");

  useEffect(() => {
    if (data) setCategory(data.data[0]);
  }, []);

  const changeHandler = (event) => {
    const name = event.target.name;
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      const file = event.target.files[0];
      if (file) {
        setForm({ ...form, [name]: file });
        setImageLabel(file.name);
      }
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
        <label className={labelStyle}>دسته بندی</label>
        <Listbox value={category} onChange={setCategory}>
          <Listbox.Button className={listBoxButtonStyle}>
            <span className="pb-1 scale-[0.8]">
              {renderIcon(category.icon)}
            </span>
            {category.name}
          </Listbox.Button>
          <Listbox.Options className={listBoxOptionsStyle}>
            {data?.data.map((item) => (
              <Listbox.Option
                key={item._id}
                value={item}
                className={({ active }) =>
                  `${listBoxOptionStyle} ${
                    active ? listBoxOptionActiveStyle : null
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`scale-[0.8] ${
                        selected ? "text-primary" : ""
                      }`}
                    >
                      {renderIcon(item.icon)}
                    </span>
                    <span
                      className={`block truncate pt-0.5 ${
                        selected ? "text-primary" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      <div className={inputFileBoxStyle}>
        <input
          type="file"
          name="images"
          id="images"
          className={inputFileStyle}
          accept=".jpeg, .jpg, .png, .webp, .svg"
        />
        <span className={inputFileNameStyle}>{imageLabel}</span>
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

function renderIcon(iconName) {
  switch (iconName) {
    case "home":
      return <HomeIcon />;
    case "car":
      return <CarIcon />;
    case "digital":
      return <DigitalIcon />;
    case "service":
      return <ServiceIcon />;
    case "game":
      return <GameIcon />;
    case "personal":
      return <PersonalIcon />;
    default:
      return null;
  }
}
