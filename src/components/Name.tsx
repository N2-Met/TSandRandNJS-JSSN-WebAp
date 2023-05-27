import React from "react";

const Name = () => {
  const onChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "gray" }}>
      <label htmlFor="name">名前</label>
      <input
        id="name"
        className="input-name"
        type="text"
        onChange={onChangename}
      />
    </div>
  );
};

export default Name;
