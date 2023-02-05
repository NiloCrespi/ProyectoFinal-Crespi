import { useState, useEffect } from "react";
import Item from "./ItemList/Item";
import ItemList from "./ItemList/ItemList";
import getProducts, {getProductsByCategory} from "../../services/mockservice"
import { useParams } from "react-router-dom";



function ItemListContainer () {
    const [productos, setProductos] = useState([]);
    let {categoryid} = useParams();

    console.log("%cRenderizando ItemListContainer", "background-color: blue");

    useEffect(() => {
        if (!categoryid) {
            getProducts()
            .then((respuesta) => {
                setProductos(respuesta);
            })
            .catch((error) => alert(error));
        } else {
            getProductsByCategory(categoryid).then((respuesta) => {
                setProductos(respuesta)
            });
        }
    }, [categoryid]);

    return (
        <ItemList>
            {productos.map((itemIterado) => {
                return (
                    <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
                );
            })}
        </ItemList>
    );
}

export default ItemListContainer;