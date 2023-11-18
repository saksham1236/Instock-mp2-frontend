import React from "react";
import "./WarehouseList.scss";
import { Link } from "react-router-dom";
import sortImg from "../../assets/Icons/sort-24px.svg";
import searchImg from "../../assets/Icons/search-24px.svg";
import deleteImg from "../../assets/Icons/delete_outline-24px.svg";
import editImg from "../../assets/Icons/edit-24px.svg";
import chevronImg from "../../assets/Icons/chevron_right-24px.svg";

function WarehouseList({ warehousesList }) {
  const columnHeaderArray = [
    "Warehouse",
    "Address",
    "Contact Name",
    "Contact Information",
    "Actions",
  ];

  return (
    <>
      <div className="warehouses-title-block">
        <div className="warehouses-title-block__container">
          <div className="warehouses-title-block__title">Warehouses</div>
          <div className="warehouses-title-block__search warehouses-tablet-view">
            <input
              type="text"
              className="warehouses-title-block__search-bar"
              placeholder="Search..."
            />
            <img src={searchImg} alt="sort icon" />
          </div>
          <div className="warehouses-title-block__add warehouses-tablet-view">
            <button className="warehouses-title-block__add-button">
              + Add New Warehouse
            </button>
          </div>
        </div>
      </div>

      <div className="warehouses-card__background">
        <div className="warehouses-card__card">

          <div className="warehouses-search-block mobile-view">
            <div className="warehouses-search-block__search">
              <input
                type="text"
                className="warehouses-search-block__search-bar"
                placeholder="Search..."
              />
              <img src={searchImg} alt="sort icon" />
            </div>

            <div className="warehouses-search-block__add">
              <button className="warehouses-search-block__add-button">
                + Add New Warehouse
              </button>
            </div>
          </div>

          <div className="warehouses-sort-block">
            <div className="warehouses-sort-block__container">
              {columnHeaderArray.map((columnHeader, index) => (
                <div className="warehouses-sort-block__column-header">
                  <div className="warehouses-sort-block__header">{columnHeader}</div>
                  {index !== 4 && (
                    <div className="warehouses-sort-block__buttons">
                      <div className="warehouses-sort-block__icons">
                        <img
                          className="warehouses-sort-block__icon"
                          src={sortImg}
                          alt="sort icon"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="warehouses-items-block">
            {warehousesList.map((warehouse) => (
              <div key={warehouse.id} className="warehouses-items-block__row">
                <div className="warehouses-items-block__mobile-block-1">
                  <div className="warehouses-items-block__column-1">
                    <div className="warehouses-items-block__header mobile-view">
                      {columnHeaderArray[0]}
                    </div>
                    <div className="warehouses-items-block__warehouse-name">
                      <Link to={`/warehouses/${warehouse.id}`}>
                        {warehouse.warehouse_name}<img src={chevronImg} alt="chevron icon" />
                      </Link>
                    </div>
                    <div className="warehouses-items-block__header mobile-view">
                      {columnHeaderArray[1]}
                    </div>

                    <div className="warehouses-items-block__warehouse-address">
                      {warehouse.address}, {warehouse.city}, {warehouse.country}
                    </div>
                  </div>
                  <div className="warehouses-items-block__column-2">
                    <div className="warehouses-items-block__header mobile-view">
                      {columnHeaderArray[2]}
                    </div>
                    <div className="warehouses-items-block__warehouse-contact-name">
                      {warehouse.contact_name}
                    </div>

                    <div className="warehouses-items-block__header mobile-view">
                      {columnHeaderArray[3]}
                    </div>
                    <div className="warehouses-items-block__warehouse-contact-info">
                      <div className="warehouses-items-block__warehouse-contact-number">
                        {warehouse.contact_phone}
                      </div>
                      <div className="warehouses-items-block__warehouse-contact-email">
                        {warehouse.contact_email}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="warehouses-items-block__mobile-block-2">
                  <div className="warehouses-items-block__warehouse-actions">
                    <div className="warehouses-items-block__warehouse-actions-delete">
                      <img src={deleteImg} alt="delete icon" />
                    </div>
                    <div className="warehouses-items-block__warehouse-actions-edit">
                      <img src={editImg} alt="edit icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
