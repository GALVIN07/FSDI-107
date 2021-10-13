import { useEffect } from "react";
import "./catalog.css";
import Item from "./item";
import DataService from "../services/dataService";

const Catalog = () => {

    //const loadCatalog = ( ) => {
        // create an instance of the service
        // call the method
       // let service = new DataService();
        // let catalog = service.getCatalog();
       // console.log("the data:", catalog);
   // };


   // useEffect(() => {
       // loadCatalog();
   // }, []);

    return (
        <div className="catalog">
            <h1>Our Amazing Catalog</h1>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>

        </div>
    );
};

export default Catalog;