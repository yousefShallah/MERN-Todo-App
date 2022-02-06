import React from 'react';
import {Spin, List, Typography, Pagination, Avatar} from 'antd';

const ItemList = ({ item }) =>  {
  return (
    <div>
        <div style={{ border: "1px solid #cccccc", margin: "10px 20px", padding: "10px" }}>
            <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<span> {item.title} </span>}
                description={<span> {item.description} </span>}
            />
        </div>
    </div>
  )
}

export default ItemList;
