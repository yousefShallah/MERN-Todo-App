import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsFunc } from '../store/servicess/getItems'

const ItemDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  console.log("params", );
  const initState = useSelector((state) => state);
  const [items, setItems] = useState();

  useEffect(() => {
    const spiltUrl = window.location.href.split('?')[1];
    const queryParams = new URLSearchParams(spiltUrl)
    const page = queryParams.get("page");
    dispatch(fetchItemsFunc(page ? page - 1 : 0));
  }, [window.location.href]);

  useEffect(() => {
    if(initState.items){
        setItems(initState?.items?.items?.Listitems?.Listitems);
    }
}, [initState]);

  return (
    <div>
      {items?.filter(item => item._id === params.itemId).map(item => {
        return(
          <div className="details-container">
            <img style={{ width: "100%", height: "350px", objectFit: "cover" }} src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?s=612x612" />
            <div style={{ marginTop: "20px"}}>
              <h2> Title: <span style={{fontSize: "16px"}}> {item.title}  </span> </h2> 
              <h2> descraption: <span style={{fontSize: "16px"}}> {item.description}  </span> </h2> 
            </div>
          <a href="/"> Back To List </a>
          </div>
        )
      })}
    </div>
  )
};

export default ItemDetails;
