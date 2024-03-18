import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import SearchContextProvider from "./Components/contexts/SearchContextProvider";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ResMenu from "./ResMenu";
import store from "./Components/Store/Store";
import { Provider } from "react-redux";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

;
function App() {
  let persistor=persistStore(store)


  return (
    <Provider store={store}>
      <SearchContextProvider>

        <PersistGate persistor={persistor}>
        <Header />
        <Outlet />
        <Footer />
        </PersistGate>
      </SearchContextProvider>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default App;
