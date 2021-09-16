import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px 0" }}>
        <h3>bezkoder.com</h3>
        <h4>React Drag & Drop File Upload example</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
