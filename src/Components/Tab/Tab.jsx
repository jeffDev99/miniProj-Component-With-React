import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
    
  return (
    <div>
        <h1 className="title">Tabs Component With React</h1>
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button key={tab.id} className={`tab-header ${index === activeTab ? "active" : ""}`} onClick={() => setActiveTab(index)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <h3 className="tab-title">{tabs[activeTab].title}</h3>
        {tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
