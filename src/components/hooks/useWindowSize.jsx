import React, { useState } from "react";

function useWindowSize() {
  const [size, setsize] = useState([window.innerHeight, window.innerWidth]);
  return { size, setsize };
}
function GetWindowSize() {
  const size = useWindowSize();
  console.log(size);
  return <>size</>;
}
export default GetWindowSize;
