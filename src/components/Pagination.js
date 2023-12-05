// chaild component
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export const Pagination = ({ showperPage, onPagination, total }) => {
  console.log(total);
  let totalValue = total;
  console.log(totalValue);

  const [counter, setCounter] = useState(1);
  // distructring
  //   const { showperPage } = props;
  //   console.log(showperPage);

  useEffect(() => {
    const value = showperPage * counter;
    // console.log("Start", value - showperPage);
    // console.log("End", value);
    const startValue = value - showperPage;
    const endValue = value;
    console.log("object");
    onPagination(startValue, endValue);
  }, [counter]);
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        disabled={counter === 1 ? true : false}
        onClick={() => setCounter(counter - 1)}
      >
        Prev
      </Button>
      <h3>{counter}</h3>
      <Button
        variant="contained"
        onClick={() => setCounter(counter + 1)}
        disabled={
          counter === Math.ceil(totalValue / showperPage) ? true : false
        }
      >
        Next
      </Button>
    </div>
  );
};
