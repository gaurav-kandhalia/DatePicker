import { useDatePicker } from "@/context/context";

const Dropdown = ({ options }) => {
  const { selectedWeekDays, setSelectedWeekDays, selectedMonth, setSelectedMonth, patternSelected,setShowSelection } = useDatePicker();

  const handleChange = (e) => {
setShowSelection(true)
    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
  

    if (patternSelected === 'Weekly') {
    
    setSelectedWeekDays(prev => {
        const newValues = new Set(prev); 
        selectedValues.forEach(value => newValues.has(value) ? newValues.delete(value) : newValues.add(value)); 
        return Array.from(newValues); 
      });
      
    } else if (patternSelected === 'Monthly') {
        setSelectedWeekDays(prev => {
            const newValues = new Set(prev); 
            selectedValues.forEach(value => newValues.has(value) ? newValues.delete(value) : newValues.add(value)); 
            return Array.from(newValues); 
          });
        setSelectedMonth(prev => {
            const newValues = new Set(prev); 
            selectedValues.forEach(value => newValues.has(value) ? newValues.delete(value) : newValues.add(value)); 
            return Array.from(newValues); 
          });

    }
  };

  return (
    <div className="text-blue-700 w-full  ">
      <select name="select option" className="w-[100%] rounded-md   mx-auto " multiple onChange={handleChange}>
        <option value="" className="text-[#2E2497]">select options</option>
        {options.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
