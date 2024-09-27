import { useDatePicker } from "@/context/context";
import Task from "./Task";

const Pattern = ({ divClass, value, spanClass }) => {
  const { patternSelected, setPatternSelected, setShowTask } = useDatePicker();

  const handleChange = () => {
    setPatternSelected(value);
    setShowTask(false);
  };

  return (
    <div
      className={`${divClass} border-1  px-3 py-1 rounded-md cursor-pointer transition-all bg-[#F1F1F1] duration-200 ease-in-out hover:bg-[#5748F3] focus-within:ring-2 focus-within:ring-blue-500`}
      role="button"
      tabIndex={0}
      onClick={handleChange}
      onKeyPress={(e) => e.key === "Enter" && handleChange()}
    >
      <span
        className={`${spanClass} text-blue-600 hover:text-[#F1F1F1] focus:text-green-500 font-bold capitalize transition-colors duration-150 ease-in-out`}
      >
        {value}
      </span>
    </div>
  );
};

export default Pattern;
