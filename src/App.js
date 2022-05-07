import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
