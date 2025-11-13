import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PasteItem from "./PasteItem";

function Pastes() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  return (
    <div>
      <input
        type="text"
        placeholder="Search Pastes"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="p-2 rounded-2xl min-w-[400px] mt-5 border-2"
      />

      <div className="flex flex-col gap-5 mt-2">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
            // <div
            // className="border-1 m-2 pt-2"
            // >
            //   <div className=""
            //   >{paste.title}</div>

            //   <div className=""
            //   >{paste.content}</div>
              
            //   </div>
            <PasteItem key={paste._id} paste={paste} />
              );
          })}
      </div>
    </div>
  );
}

export default Pastes;
