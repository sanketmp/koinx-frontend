import "./App.css";
import Form from "./components/Form";
import Inputs from "./components/Inputs";
import Card from "@mui/material/Card";

function App() {
  return (
    <>
      <Card
        sx={{ borderRadius: "16px" }}
        className="p-10 justify-evenly max-w-fit ml-60 my-20"
      >
        <p className="text-2xl pb-5 text-center">
          Free Crypto Tax Calculator Australia
        </p>
        <Form />
        <div
          style={{
            width: "100%",
            height: "100%",
            borderBottom: "2px rgba(201, 207, 221, 0.60) solid",
          }}
        />
        <Inputs />
      </Card>
    </>
  );
}

export default App;
