import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            {/* <h1> {ProductKey} Detail coming </h1> */}
        </div>
    );
};

export default ProductDetail;