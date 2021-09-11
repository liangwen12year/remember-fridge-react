import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import fridgeIcon from "../../img/fridge_icon.svg";
import freezerIcon from "../../img/freezer_icon.svg";
import listIcon from "../../img/list_icon.svg";
import settingsIcon from "../../img/settings_icon.svg";
import { SideNav, BottomNav } from "./styledForNavBar";
import IntroBlock from "../Header/SimpleHeader";
import { Button, ButtonGroup } from 'reactstrap';


const BottomNavBar = ({
  currentSection,
  sectionChange,
  toggleSettings,
  toggleList
}) => (
    <BottomNav>
      <div>
        <button
          data-id="fridge"
          className={currentSection === "fridge" ? "active" : ""}
          onClick={sectionChange}
        >
          <img
            style={{ width: "24px", height: "34px" }}
            src={fridgeIcon}
            alt=""
          />
        Fridge
      </button>
        <button
          data-id="freezer"
          className={currentSection === "freezer" ? "active" : ""}
          onClick={sectionChange}
        >
          <img
            style={{ width: "25px", height: "34px" }}
            src={freezerIcon}
            alt=""
          />
        Freezer
      </button>
        <button onClick={toggleList}>
          <img style={{ width: "30px", height: "34px" }} src={listIcon} alt="" />
        Shopping List
      </button>
        <button onClick={toggleSettings}>
          <img
            style={{ width: "32px", height: "34px" }}
            src={settingsIcon}
            alt=""
          />
        Settings
      </button>
      </div>
    </BottomNav>
  );
function changeBackground(e) {
  e.target.style.background = 'red';
}

function changeBackground2(e) {
  e.target.style.background = '#004f6a';
}

const SideNavBar = ({
  currentSection,
  sectionChange,
  toggleSettings,
  toggleList
}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <SideNav>
      <div className="App"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>

        <button
          data-id="fridge"
          className={currentSection === "fridge" ? "active" : ""}
          onClick={sectionChange}
          style={{ width: "30px" }}
        >
          <img
            style={{ width: "24px", height: "34px" }}
            src={fridgeIcon}
            alt=""
          />
        Fridge
        </button>
        {isShown && (
          <ButtonGroup>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge1

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge2

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge3

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge4

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge5

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge6

            </Button>
            <Button
              onMouseOver={changeBackground}
              onMouseOut={changeBackground2}
              style={{ height: "50px" }}
              data-id="fridge"
              className={currentSection === "fridge" ? "active" : ""}
              onClick={sectionChange}>
              <img
                style={{ width: "24px", height: "14px" }}
                src={fridgeIcon}
                alt=""
              />
        Fridge7

            </Button>
          </ButtonGroup>
        )}

      </div>

      <button
        data-id="freezer"
        className={currentSection === "freezer" ? "active" : ""}
        onClick={sectionChange}
      >
        <img
          style={{ width: "25px", height: "34px" }}
          src={freezerIcon}
          alt=""
        />
        Freezer
      </button>
      <button onClick={e => toggleList(e)}>
        <img style={{ width: "30px", height: "34px" }} src={listIcon} alt="" />
        Shopping List
      </button>
      <button onClick={e => toggleSettings(e)}>
        <img
          style={{ width: "32px", height: "34px" }}
          src={settingsIcon}
          alt=""
        />
        Settings
      </button>
    </SideNav >
  );
};

export { BottomNavBar, SideNavBar };
