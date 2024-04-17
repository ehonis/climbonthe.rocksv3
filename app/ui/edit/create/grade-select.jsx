"use client";

import RopeGradeSelect from "./rope-grade-select";
import BoulderGradeSelect from "./boulder-grade-select";
import { useState } from "react";

export default function GradeSelect() {
  const [type, setType] = useState("rope");

  const handleTypeChange = (event) => setType(event.target.value);
  return (
    <>
      <div className="background flex h-6 items-center justify-start gap-3 border-none">
        <h3 className="text-lg font-semibold text-white">Grade:</h3>
        <select name="type" id="" onChange={handleTypeChange}>
          <option value="rope">Rope</option>
          <option value="boulder">Boulder</option>
        </select>
        {type === "boulder" ? <BoulderGradeSelect /> : <RopeGradeSelect />}
      </div>
    </>
  );
}
