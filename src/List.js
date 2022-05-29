import React from "react";
import Form from "react-bootstrap/Form";
import classNames from "classnames";

import "./List.style.scss";

export default function List({ items, currentView, onToggleCurrentView }) {
  const isDetailedView = currentView === "grid";

  return (
    <div>
      <div className="fixed-nav">
        <br /><br /><br /><h3>Showing items as a {currentView}</h3>
        <Form.Check
          checked={isDetailedView}
          onChange={onToggleCurrentView}
          type="switch"
          id="Grid View"
          label="Grid View"
        />
      </div>

      <div className={classNames("list", { "list-grid": isDetailedView })}>
        {items.map(item => (
          <div className="list-item" key={item.title}>
            {isDetailedView && (
              <img
                src={item.thumbnail}
                alt={item.title}
                className="list-item-image"
              />
            )}
            <h3>{item.title}</h3>
            {isDetailedView && (
              <p className="list-item-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
