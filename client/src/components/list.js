import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsFunc } from '../store/servicess/getItems';
import {Spin, List, Typography, Pagination, Avatar, Button, Row, Col} from 'antd';
import { useNavigate, Link, useParams } from "react-router-dom";

import './index.css';
import ItemList from './itemList';
import ItemDetails from './itemDetails';

const ListItems = () =>  {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    console.log("params", params);
    const initState = useSelector((state) => state);
    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState();
    const [pageNum, setPageNum] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);
    const [itemOnClick, setItemOnClick] = useState();
    useEffect(() => {
        const spiltUrl = window.location.href.split('?')[1];
        const queryParams = new URLSearchParams(spiltUrl)
        const page = queryParams.get("page");
        setPageNum(page)
        dispatch(fetchItemsFunc(page ? page - 1 : 0));
    }, [window.location.href]);

    useEffect(() => {
        if(initState.items){
            setItems(initState?.items?.items?.Listitems?.Listitems);
            setIsLoading(initState?.items?.loading);
            setItemsCount(initState?.items?.items?.Listitems?.itemsCount)
        }
    }, [initState]);

    console.log("items", initState);
    const headerList = () => {
        return (
            <Row>
                <Col span={12}>
                    <span> TODO ITEMS LIST </span>
                </Col>
                <Col span={12}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type="button" className="btn btn-primary" onClick={() => navigate("/create-item")}> Add New Item </Button>
                    </div>
                </Col>
            </Row>
        )
    }
    const handelPaginationChange = (newnum, e) => {
        navigate(`/?page=${newnum}`)
    }
    const footerList = () => {
        const total = parseInt(itemsCount/10, 10)+10;
        return (
            <Pagination defaultCurrent={pageNum} total={total} onChange={ handelPaginationChange } />
        )
    }

    const handelDisplaySection = () => {
        const { itemId } = params;
        items?.filter(item => item._id === itemId).map(item => {
            console.log("item", item);
            return (
                <div key={item._id}>
                    {item?.title}
                    {item?.description}
                </div>
            )
        })
    }
    
    // <Link to={`/item-details/${item._id}`} >
    return (
        <div className="list-container">
            <Row>
                <Col sm={24} xs={24} md={12} lg={8} xl={8}>
                    {!isLoading && items?.length ?
                        <List
                        header={headerList()}
                        footer={footerList()}
                        bordered
                        itemLayout="horizontal"
                        dataSource={items}
                        renderItem={(item, i) => {
                            setItemOnClick(item);
                            return (
                                <div>
                                    <div className="item-view-web">
                                        <Link to={`/${item._id}?page=${pageNum ? pageNum : 1}`} >
                                            <ItemList item={item}/>
                                        </Link>
                                    </div>
                                    <div className="item-view-mobile">
                                        <Link to={`/item-details/${item._id}?page=${pageNum ? pageNum : 1}`} >
                                            <ItemList item={item}/>
                                        </Link>
                                    </div>
                                </div>
                                
                            )
                        }}
                        />
                    : <Spin className="spin-loader" size='large' />}
                </Col>
                <Col sm={0} xs={0} md={12} lg={16} xl={16}>
                    <div className="list-display">
                        {items?.filter(item => item._id === params.itemId).map(item => {
                            console.log("item", item);
                            return (
                                <div key={item._id}>
                                    <img style={{ width: "100%", height: "350px", objectFit: "cover" }} src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?s=612x612" />
                                    <div style={{ marginTop: "20px"}}>
                                        <h1> Title: {item?.title} </h1>
                                        <h1> Description: {item?.description} </h1>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ListItems;
