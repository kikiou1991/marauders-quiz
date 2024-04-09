import { useEffect, useState } from "react";
import { Progress } from "@nextui-org/react";

interface ProgressLoaderProps {
  value: number;
  maxValue: number;
}

const ProgressLoader = ({ value, maxValue }: ProgressLoaderProps) => {
  return (
    <Progress
      label="Questions"
      size="md"
      value={value}
      maxValue={maxValue}
      color="success"
      className="max-w-md"
    />
  );
};
export default ProgressLoader;
