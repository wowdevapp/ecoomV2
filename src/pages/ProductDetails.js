import React from "react";
import {useParams} from 'react-router-dom';
export default function ProductDetails() {
  console.log(useParams())
  const {id} = useParams();
return <h1>hello from product details page id {id} </h1>;
}
