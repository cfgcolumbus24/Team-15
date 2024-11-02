import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const options = [
    { value: 'option1', label: 'Option 1', path: '/option1' },
    { value: 'option2', label: 'Option 2', path: '/option2' },
    { value: 'option3', label: 'Option 3', path: '/option3' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string, path: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    navigate(path); // Navigate to the corresponding path
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option.label, option.path)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

