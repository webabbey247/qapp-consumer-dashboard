import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NoMatch, Homepage} from "./pages";
import {GlobalStyle} from "./GlobalCss";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Homepage />}>
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
