import React from 'react';
import "./listPage.scss";
import { listData } from '../../lib/dummydata';
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/card";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage">
      <div className="ContainerSearch">
        <Filter />
      </div>
      <div className="listContainer">
        <div className="wrapper">
          {data.map(item => (
              <Card key={item.id} item={item} />
            ))}
        </div>
        <div className="mapContainer">Map</div>
      </div>
    </div>
  );
}

export default ListPage;