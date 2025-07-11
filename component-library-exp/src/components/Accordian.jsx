import React, { useState } from "react";

const Accordian = () => {
  const [data, setData] = useState([
    {
      id: 1,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      isOpen: false,
    },
    {
      id: 2,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      isOpen: false,
    },
    {
      id: 3,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      isOpen: false,
    },
    {
      id: 4,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      isOpen: false,
    },
    {
      id: 5,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      isOpen: false,
    },
    {
      id: 6,
      que: "test1",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
      isOpen: false,
    },
  ]);

  const toggleOpen = (id) => {
    setData((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, isOpen: !data.isOpen } : { ...data, isOpen: false }
      )
    );
  };

  return (
    <div>
      <ul>
        {data?.map((q) => (
          <li key={q.id} className="border">
            <h4 className="cursor-pointer" onClick={() => toggleOpen(q.id)}>
              {q.que}
            </h4>
            <p className={`${q.isOpen ? "block" : "hidden"}`}>{q.ans}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordian;
