import { useRef } from "react";

// type Props = {
//   renderNumber: number;
// };

// // -- Ignore
function RenderCounter() {

  const renderNumber = useRef(0);
  renderNumber.current = renderNumber.current + 1;

  return <div className="counter">{renderNumber.current}</div>;
}

export default RenderCounter;
