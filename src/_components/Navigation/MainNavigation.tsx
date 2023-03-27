import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Form/Button/Button";
import Backdrop from "./Backdrop";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && ( 
        <>
          <Backdrop onClick={closeDrawerHandler} />
          <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
              <NavLinks />
            </nav>
          </SideDrawer>
        </>
      )}
      <MainHeader>
        <div className="main-navigation__title">
          <Link to="/">
            <img
              src="/images/Untitled-design.svg"
              style={{ width: "35px", height: "35px",color:'white', filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(133348%) contrast(119%)',border:'1px solid white',borderRadius:'100rem'}}
            ></img>
          </Link>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>

        <div className="navbutton-container">
          <Button
            className="wallet-button hide"
            outlined
            onClick={openDrawerHandler}
            type="button"
            text=""
            iconLeft={<i className="fa-solid fa-bars m-2" />}
          />
        </div>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
