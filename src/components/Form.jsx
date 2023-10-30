import aus from "../assets/aus.svg";
import { Select, MenuItem } from "@mui/material";

const Form = () => {
  return (
    <>
      <div className="flex flex-row space-x-2 my-2 mx-2">
        <div>
          <p className="text-sm">Financial Year</p>
        </div>
        <div>
          <Select value="fy23" className="bg-white h-10">
            <MenuItem value="fy23">FY 2023-24</MenuItem>
          </Select>
        </div>
        <div> 
          <p className="text-sm">Country</p>{" "}
        </div>
        <div>
          <Select value="aus" className="bg-white h-10 max-w-fit px-7">
            <MenuItem value="aus" className="h-10 text-xl">
              <img src={aus} className="h-6 w-6 my-1" />
              Australia
            </MenuItem>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Form;
