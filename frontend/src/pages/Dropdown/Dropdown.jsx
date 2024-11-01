import { useState } from "react";

const Dropdown = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);

  const dropdownOptions = [
    {
      id: 1,
      label: "Mazda Miata",
      value: "mazda-miata",
    },
    {
      id: 2,
      label: "Honda Civic",
      value: "honda-civic",
    },
    {
      id: 3,
      label: "Toyota Corolla",
      value: "toyota-corolla",
    },
    {
      id: 4,
      label: "Ford Mustang",
      value: "ford-mustang",
    },
  ];

  return (
    <div className='dropdown'>
      <button className='toggle' onClick={() => setDropdownToggled(!dropdownToggled)}>
        Toggle
      </button>
      {dropdownToggled && (
        <div className='options'>
          {dropdownOptions.map((option) => (
            <button key={option.id} className='option'>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;

