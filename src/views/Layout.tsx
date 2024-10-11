import { LayoutBody, LayoutContainer, LayoutHeader } from "@/components/Layout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutContainer>
      <LayoutHeader />
      <LayoutBody>
        <Outlet />
      </LayoutBody>
    </LayoutContainer>
  );
};

export default Layout;
