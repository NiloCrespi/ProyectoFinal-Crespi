import React, { useState, useEffect } from "react";
import {getProduct} from "../../services/mockservice";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer () {
    const [productos, setProductos] = useState([]);
    let params = useParams();

    useEffect(() => {
        getProduct(params.itemid)
        .then((respuesta) => {
            setProductos(respuesta);
        })
        .catch((error) => alert(error));
    },
    []);

    return (
        <ItemDetail
            category={productos.category}
            product={productos.product}
            detail={productos.detail}
            price={productos.price}
            imgurl={productos.imgurl}
            stock={productos.stock}
        />
    );
}

export default ItemDetailContainer;
