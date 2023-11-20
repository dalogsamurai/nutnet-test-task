import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import { RouteObject, useRoutes } from "react-router-dom";
import MainPage from "./pages/main-page/main.page";
import { CITY_PAGE_PATH } from "./routes/paths";
import CityPage from "./pages/city-page/city.page";
import "./App.sass";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      children: [
        { index: true, element: <MainPage /> },
        { path: CITY_PAGE_PATH, element: <CityPage /> },
        { path: "*", element: <MainPage /> },
      ],
    },
  ];

  const page = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {page}
    </div>
  );
}

export default App;
