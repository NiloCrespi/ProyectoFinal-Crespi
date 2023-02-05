import React, {useState} from "react";
import "./ItemDetail.css";
import Button from "./../Button/Button"
import ItemCount from "./../ItemCount/ItemCount"

function ItemDetail ({category, product, detail, price, imgurl}) {
    return (
        <div className="item-detail">
            <div className="item-detail_img">
                <img src={imgurl} alt={product} />
            </div>

            <div className="item-detail_info">
                <h2 className="item-detail_product">{product}</h2>
                <h3 className="item-detail_detail">{detail}</h3>
                <h4 className="item-detail_price">$ {price}</h4>
                <small className="item-detail_category">{category}</small>
                <ItemCount></ItemCount>
                <Button padding="0.75rem" color="purple">Agregar al carrito</Button>
            </div>
        </div>
    );
}

export default ItemDetail;