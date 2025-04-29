import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported
import {assets} from '../../assets/assets'

const Sidebar = ({sidebarVisible}) => {
  return (
    <div className={`border-end bg-white ${sidebarVisible ? '': 'd-none'}`} id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light d-flex justify-content-center align-items-center">
        <img src={assets.YumDrop} alt = '' height={48} width={48}></img>
      </div>
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/add">
        <i className='bi bi-plus-circle me-2'></i> Add Food</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/list">
        <i className='bi bi-list-ul me-2'></i>Food List</Link>
        <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/orders">
        <i className='bi bi-cart me-2'></i>Orders</Link>
      </div>
    </div>
  );
}

export default Sidebar;
