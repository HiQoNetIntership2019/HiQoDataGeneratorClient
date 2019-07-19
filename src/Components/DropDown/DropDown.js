import React from 'react';
import './style.css';

export default function DropDown(props) {
  let currentItem = props.currentItem;
  let defaultItem = props.defaultItem;

  let items = props.items.map(item =>
    <a className='dropdown-item' onClick={event => props.selectItem(item)} key={item.id}
      title={item.description ? item.description : ""}>
      { item.name }
    </a>
  );

  return (
    <div className="dropdown field-types-btn">
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        { currentItem ? currentItem : defaultItem ? defaultItem : "Drop Down" }
      </button>
      <div className="dropdown-menu">
        { items }
      </div>
    </div>
  );
}
