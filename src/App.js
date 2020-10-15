import React from "react";
import Application from "./Application";
import UserProvider from "./Providers/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
