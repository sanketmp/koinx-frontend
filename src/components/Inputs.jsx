import tick from "../assets/mdi_tick.svg";
import { useState } from "react";
import { Box } from "@mui/system";
import { Select, MenuItem } from "@mui/material";

const Inputs = () => {
  const [term, setTerm] = useState("");
  const [income, setIncome] = useState("");
  const [sale_price, setSale] = useState("");
  const [purchase_price, setPurchase] = useState("");
  const [expense_given, setExpense] = useState("");

  const capGain = sale_price - purchase_price - expense_given;
  const discount = (capGain / 100) * 50;
  let netCap;
  if (term === "long") {
    netCap = capGain - discount;
  }
  if (term === "short") {
    netCap = capGain;
  }

  const selected = {
    color: "#0141CF",
    border: "2px solid",
    borderRadius: "8px",
    background: "#dbeafe",
  };

  const notSelected = {
    color: "black",
    border: "1px solid",
    borderRadius: "8px",
  };

  return (
    <>
      <div className="flex flex-row space-x-2 my-2 mx-2">
        <div>
          <p className="text-sm">Enter purchase price of Crypto</p>
          <input
            type="number"
            className="rounded-lg h-10 text-lg bg-gray-200"
            id="purchase"
            value={purchase_price}
            onChange={(event) => setPurchase(event.target.value)}
          />
        </div>
        <div>
          <p className="text-sm">Enter sale price of Crypto</p>
          <input
            type="number"
            className="rounded-lg h-10 text-lg bg-gray-200"
            id="sale"
            value={sale_price}
            onChange={(event) => setSale(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-row space-x-2 my-2 mx-2">
        <div>
          <p className="text-sm">Enter your Expenses</p>
          <input
            type="number"
            className="rounded-lg h-10 text-lg bg-gray-200"
            id="expense"
            value={expense_given}
            onChange={(event) => setExpense(event.target.value)}
          />
        </div>
        <div>
          <p className="text-sm">Investment Type</p>
          <Box className="flex flex-row space-x-2">
            <div>
              <Box
                sx={term === "short" ? selected : notSelected}
                onClick={() => setTerm("short")}
                className="h-10 text-lg flex flex-row px-2"
              >
                Short Term
                {term === "short" && (
                  <img className="h-6 w-6 my-1" src={tick} />
                )}
              </Box>
              <p className="text-sm">&lt;12 Months</p>
            </div>
            <div>
              <Box
                sx={term === "long" ? selected : notSelected}
                onClick={() => setTerm("long")}
                className="h-10 text-lg flex flex-row px-2"
              >
                Long Term
                {term === "long" && <img className="h-6 w-6 my-1" src={tick} />}
              </Box>
              <p className="text-sm">&gt;12 Months</p>
            </div>
          </Box>
        </div>
      </div>
      <div className="flex flex-row space-x-2 my-2 mx-2">
        <div>
          <p className="text-sm">Select your Annual Income</p>
          <Select
            sx={{ width: "100%" }}
            className="bg-white h-10 min-w-100 bg-gray-200"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          >
            <MenuItem value="min0">$0 - $18,200</MenuItem>
            <MenuItem value="min18">$18,201 - $45,000</MenuItem>
            <MenuItem value="min45">$45,001 - $120,000</MenuItem>
            <MenuItem value="min120">$120,001 - $180,000</MenuItem>
            <MenuItem value="min180">$180,001+</MenuItem>
          </Select>
        </div>
        <div>
          <p className="text-sm">Tax Rate</p>
          {income === "min0" && <p className="h-10 rounded-lg px-2 py-2">0%</p>}
          {income === "min18" && (
            <p className="h-10 rounded-lg px-2 py-2">
              Nil + 19% of the excess over $18,200
            </p>
          )}
          {income === "min45" && (
            <p className="h-10 rounded-lg px-2 py-2">
              $5,092 + 32.5% of the excess over $45,000
            </p>
          )}
          {income === "min120" && (
            <p className="h-10 rounded-lg px-2 py-2">
              $29,467 + 37% of the excess over $120,000
            </p>
          )}
          {income === "min180" && (
            <p className="h-10 rounded-lg px-2 py-2">
              $51,667 + 45% of the excess over $180,000
            </p>
          )}
        </div>
      </div>
      {term === "long" && (
        <div className="flex flex-row space-x-2 my-2 mx-2">
          <div>
            <p className="text-sm">Capital Gains Amount</p>
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
              }}
              className="h-10 bg-gray-200 text-lg px-2 py-1"
            >
              {capGain >= 0 ? "$ " + capGain : "$ " + 0}
            </Box>
          </div>
          <div>
            <p className="text-sm">Discount for Long Term Goals</p>
            <Box
              sx={{
                width: "100%",
                borderRadius: "8px",
              }}
              className="h-10 bg-gray-200 text-lg px-2 py-1"
            >
              {discount >= 0 ? "$ " + discount : "$ " + 0}
            </Box>
          </div>
        </div>
      )}
      <div className="flex flex-row space-x-2 my-2 mx-2">
        <div>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
            className="h-10 bg-green-200 text-lg text-center text-green-700 font-bold px-2 py-2"
          >
            <p className="text-sm font-semibold">
              Net Capital gains tax amount
            </p>
            {netCap >= 0 ? "$ " + netCap : "$ " + 0}
          </Box>
        </div>
        <div>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
            className="h-10 bg-blue-200 text-lg  text-center text-blue-700 font-bold px-2 py-2"
          >
            <p className="text-sm font-semibold">The tax you need to pay</p>
            {income === "min0" && "$ " + 0}
            {income === "min18" && "$ " + (netCap / 100) * 19}
            {income === "min45" && "$ " + (netCap / 100) * 32.5}
            {income === "min120" && "$ " + (netCap / 100) * 37}
            {income === "min180" && "$ " + (netCap / 100) * 45}
          </Box>
        </div>
      </div>
    </>
  );
};

export default Inputs;
