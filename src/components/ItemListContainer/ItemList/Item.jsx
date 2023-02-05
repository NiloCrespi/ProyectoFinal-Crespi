import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./Item.css";

function Item (props) {
    const {category, product, detail, price, imgurl, id} = props.item;

    return (
        <div className="item-card">
            <div className="item-card_header">
                <h2>{product}</h2>
            </div>

            <div className="item-card_img">
                <img src={imgurl} alt={product} />
            </div>

            <div className="item-card_details">
                <h3 className="item-card_detail">{detail}</h3>
                <h4 className="item-card_price">$ {price}</h4>
                <small>{category}</small>
            </div>

            <Link to={`/detail/${id}`}>
                <Button padding="22px" color="purple">Ver más</Button>
            </Link>


        </div>
    );
}

export default Item;