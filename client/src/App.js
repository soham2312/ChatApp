import { Route } from "react-router-dom";
import "./App.css";
import Chatpage from "./page/Chatpage";
import Homepage from "./page/Homepage";


function App() {
  return (
    <div classnmae="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} exact />
    </div>
  );
}

export default App;
