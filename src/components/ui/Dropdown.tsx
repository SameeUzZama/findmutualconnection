import React from "react";
import Select from "react-dropdown-select";

const DropDown: React.FC<{
  placeholder: string;
  options: { value: string; label: string }[];
  onSelection: (user: { value: string; label: string }) => void;
}> = (props) => {
  const inputChangeHandler = (values: { value: string; label: string }[]) => {
    props.onSelection(values[0]);
  };

  return (
    <Select
      options={props.options}
      values={[]}
      multi={false}
      onChange={(values) => inputChangeHandler(values)}
      placeholder={props.placeholder}
      dropdownHandle={false}
      clearable={true}
    />
  );
};

export default DropDown;
