import "./tabsHead.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeTab from "../homeDetails/homeDetails";
import Favourite from "../favourite/favourite";
import Recent from "../recentSearch/recentSearch";
import { Route, Routes, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const TabsHeader = () => {
  const [value, onChange] = useState("");
  const [date, setDate] = useState<any>(new Date());

  const today = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(today, 1000);
    return function timeChange() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <div className="tabLinks">
        <div className="tabsSelect">
          <NavLink to="/" className="linkNames">
            HOME
          </NavLink>
          <NavLink to="/fav" className="linkNames">
            FAVOURITE
          </NavLink>
          <NavLink to="/recent" className="linkNames">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="dateDisplay">
          <div>
            {" "}
            <span>
              {" "}
              {date.toLocaleString("en-us", {
                weekday: "short",
              })}
              , {date.getDate()}{" "}
              {date.toLocaleString("en-us", {
                month: "short",
              })}{" "}
              {date.getFullYear()}
              &nbsp;&nbsp;&nbsp;
              {date.toLocaleString("en-US", {
                hour: "numeric",

                minute: "numeric",

                hour12: true,
              })}
            </span>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomeTab date={date} />} />
        <Route path="/fav" element={<Favourite />} />{" "}
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
  );
};

export default TabsHeader;
