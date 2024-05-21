import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { Button } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" component={<Homepage/>}/> */}
        <Route path="/" element={<Homepage/>}/>
      {/* <Route path="/" component={Homepag   */}
      {/* <Button colorScheme="blue">HELLO</Button> */}
      <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
  );
}

export default App;