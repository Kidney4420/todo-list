import { useState } from "react";

export default function UnitConversionForm() {
  const [mmInput, setMmInput] = useState(0);

  return (
    <>
      <input
        type="number"
        onChange={(event) => {
          setMmInput(+event.target.value);
        }}
        value={mmInput}
      />{" "}
      mm
      <p>{(mmInput / 25.4).toFixed(2)} inches</p>
    </>
  );
}
