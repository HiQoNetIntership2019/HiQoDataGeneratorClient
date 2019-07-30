import React from 'react';
import './style.css';

export default function DropDown(props) {
  let currentItem = props.currentItem;
  let defaultItem = props.defaultItem;

  let items = props.items.map(item =>
    <a className='dropdown-item dropdown-menu-item' onClick={event => props.selectItem(item)} key={item.id}
      title={item.description ? item.description : item.name}>
      { item.name }
    </a>
  );

  return (
    <div className="dropdown field-types-btn">
      <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
        <a className="dropdown-menu-item" id="dropdownMenuButtonText">
          { currentItem ? currentItem : defaultItem ? defaultItem : "Drop Down" }
        </a>
      </button>
      <div className="dropdown-menu scrollable-menu">
        { items }
      </div>
    </div>
  );
}
