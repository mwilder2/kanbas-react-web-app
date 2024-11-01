import { Provider } from "react-redux";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./Kanbas/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;
