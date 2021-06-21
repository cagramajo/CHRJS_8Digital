import React, {useState, useEffect} from "react";
import Item from "../Item/Item";

export default function ItemList() {


    const [productList, setProductList] = useState([])

    useEffect(() => {
        const loadPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Pasaron 20 Seg!");
                setProductList(loadItem);
            }, 3000);
            console.log("Estamos aquí");
        })
//        loadPromise.then((resolve)=>{
//            console.log(resolve);
//            setProductList(loadItem);
//        })
    }, [])

    const loadItem = () => {
        let pList = [
            {
                IdProduct:1,
                UrlPhoto:"https://www.cannaconnection.es/12098/og-kush.jpg",
                AltPhoto:"Flower",
                NameProduct:"OG Kush",
                LittleDesciption:"Un clasico popular por buenas razones.",
                Price:"2200"
            },
            {
                IdProduct:2,
                UrlPhoto:"https://www.cannaconnection.es/12098/og-kush.jpg",
                AltPhoto:"Flower",
                NameProduct:"OG Kush",
                LittleDesciption:"Un clasico popular por buenas razones.",
                Price:"2300"
            },
            {
                IdProduct:3,
                UrlPhoto:"https://www.cannaconnection.es/12098/og-kush.jpg",
                AltPhoto:"Flower",
                NameProduct:"OG Kush",
                LittleDesciption:"Un clasico popular por buenas razones.",
                Price:"2400"
            }
        ]
        return pList;
    }

  return (
    <div >
        {productList.map(item =>
            <Item
                key={item.IdProduct}
                Photo={item.UrlPhoto}
                AltPhoto={item.AltPhoto}
                NameProduct={item.NameProduct}
                LittleDesciption={item.LittleDesciption}
                Price={item.Price}
            />
            )}
    </div>
  );
}
