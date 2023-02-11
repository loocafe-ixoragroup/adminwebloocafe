import React from "react";
import "./TabView.css";
import { Tabs, Tab, Panel } from "@bumaga/tabs";
const TabView = () => {
  return (
    <Tabs>
      <div>
        <Tab>
          <button>All Orders</button>
        </Tab>
        <Tab>
          <button>Live</button>
        </Tab>
        <Tab>
          <button>Maintainance</button>
        </Tab>
        <Tab>
          <button>Removed</button>
        </Tab>
      </div>
      <Panel>
        <p>Panel 1</p>
      </Panel>
      <Panel>
        <p>Panel 2</p>
      </Panel>
      <Panel>
        <p>panel 3</p>
      </Panel>
      <Panel>
        <p>panel 4</p>
      </Panel>
    </Tabs>
  );
};

export default TabView;
