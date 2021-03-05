import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {id} = useParams();
   const product =  fakeData.find(pd => pd.key === id)
   console.log(product);
    console.log(id);
    return (
        <div>
            <h1>Details Here </h1>
            <Product showButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;