import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import App from "@/pages/home/App";
import Layout from "@/views/Layout";
import Detail from "@/pages/details/Detail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={"/page/1"} />} />
        <Route path="/page/:page" element={<App />} />
      </Route>
      <Route path="/pokemon/" element={<Layout />}>
        <Route path="/pokemon/:pokemon" element={<Detail />} />
      </Route>
    </>
  )
);

export const RouterManager = () => {
  return <RouterProvider router={router} />;
};
