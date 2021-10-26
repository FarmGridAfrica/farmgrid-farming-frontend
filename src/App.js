import Pages from "./Pages";
import { BrowserRouter as Router } from "react-router-dom";

import "./referral.css";

// scss import
import "./sass/App.scss";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Alert } from "./Layout/Alert";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Alert />
        <Router>
          <Pages />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
