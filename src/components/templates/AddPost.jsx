import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";
import { Listbox } from "@headlessui/react";
import { provinces } from "constants/cities";
import axios from "axios";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import RenderIcon from "components/RenderIcon";

// styles
import {
  buttonDivStyle,
  formButtonStyle,
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
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const queryClient = useQueryClient();

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

    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    formData.set("category", category._id);
    formData.set("city", selectedProvince.name);

    const token = getCookie("accessToken");
    if (
      !formData.get("title") ||
      !formData.get("content") ||
      !formData.get("amount") ||
      !formData.get("city") ||
      !formData.get("category")
    )
      return toast.error("لطفا فرم را تکمیل کنید");

    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        queryClient.invalidateQueries("my-post-list");
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("لطفا فرم را تکمیل کنید");
        setIsLoading(false);
      });
  };

  return (
    <form onChange={changeHandler} className="flex-1 md:max-w-xs">
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
        <Listbox value={selectedProvince} onChange={setSelectedProvince}>
          <Listbox.Label className={labelStyle}>استان</Listbox.Label>
          <Listbox.Button className={listBoxButtonStyle}>
            {selectedProvince.name}
          </Listbox.Button>
          <Listbox.Options className={listBoxOptionsStyle}>
            {provinces.map((province, index) => (
              <div key={province.id}>
                <Listbox.Option
                  key={province.id}
                  value={province}
                  disabled={province.unavailable}
                  className={({ active }) =>
                    `${listBoxOptionStyle} ${
                      active ? listBoxOptionActiveStyle : null
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={selected ? "text-primary" : ""}>
                      {province.name}
                    </span>
                  )}
                </Listbox.Option>
                {index !== provinces.length - 1 && (
                  <hr className="border-[#EDEDED]" />
                )}
              </div>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      <div className={inputBoxStyle}>
        <label className={labelStyle}>دسته بندی</label>
        <Listbox value={category} onChange={setCategory}>
          <Listbox.Button className={listBoxButtonStyle}>
            <span className="pb-1 scale-[0.8]">
              <RenderIcon iconName={category.icon} />
            </span>
            {category.name}
          </Listbox.Button>
          <Listbox.Options className={listBoxOptionsStyle}>
            {data?.data.map((item, index) => (
              <div key={item._id}>
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
                        <RenderIcon iconName={item.icon} />
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
                {index !== item.length - 1 && (
                  <hr className="border-[#EDEDED]" />
                )}
              </div>
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
          accept="image/png, image/png"
        />
        <span className={inputFileNameStyle}>{imageLabel}</span>
        <label htmlFor="images" className={labelStyle}>
          عکس
        </label>
      </div>

      <div className={buttonDivStyle}>
        <button
          onClick={addHandler}
          className={formButtonStyle}
          disabled={isLoading}
        >
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
    </form>
  );
}

export default AddPost;
