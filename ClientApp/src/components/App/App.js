import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";

import "./App.scss";

const App = () => (
  <Layout>
    <Routes>
      <Route index element={<div>Minecraft Servers Manager</div>} />
    </Routes>
  </Layout>
);

export default App;
