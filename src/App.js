import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { Operations } from "./pages/Operations";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [token, setToken] = React.useState('');
  const [username, setUsername] = React.useState('');
  return (
    <main>
      <BrowserRouter>
        <UserContext.Provider
          value={{token, setToken, username, setUsername}}
        >
          <Routes>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/new-operation:type" element={<Operations/>}/>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
