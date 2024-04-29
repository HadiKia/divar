import { Listbox } from "@headlessui/react";
import { labelStyle } from "styles/categoryFormStyle";
import { provinces } from "constants/cities";

import {
  listBoxButtonStyle,
  listBoxOptionActiveStyle,
  listBoxOptionStyle,
  listBoxOptionsStyle,
} from "styles/addPostStyle";

function CitySelection({ selectedProvince, setSelectedProvince }) {
  return (
    <>
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
    </>
  );
}

export default CitySelection;
