import React from "react";
import Select from "react-select";

import { customSelectStyle, itemsPerPage } from "../../../Utils";

const PerPage = ({
  setPageSize = () => {},
  pageSize,
  resetPage = () => {},
}) => {
  const handleChange = (value, setState) => {
    setState(value);
    resetPage();
  };

  return (
    <div className="d-flex justify-content-between gap-1 mt-2">
      <p className="mt-1">Show</p>
      <Select
        name="Page size"
        onChange={(option) => handleChange(option, setPageSize)}
        options={itemsPerPage}
        value={pageSize}
        placeholder="Select"
        menuPortalTarget={document.body}
        styles={{
          ...customSelectStyle.initialSelect,
          menuPortal: (base) => ({ ...base, zIndex: 1050 }),
        }}
      />
      <p className="mt-1">Entries</p>
    </div>
  );
};

export default PerPage;
