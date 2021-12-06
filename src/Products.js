import React from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import Product from './Product'



const Products = ({math}) => {



    const productData = [
        {
            id:1,
            name: 'NIKE Liteforce blue sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam temporibus architecto, voluptatum assumenda cupiditate nemo vero molestias corrupti? Molestias?',
            status: 'Available'
        },
        {
            id:2,
            name: 'Stylised Flip Flops and Slippers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam temporibus architecto',
            status: 'Out of Stock'
        },
        {
            id:3,
            name: 'ADIDAS Running Shoes',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            status: 'Available'
        },
        {
            id:4,
            name: 'ADIDAS Mid Sneakers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            status: 'Out of Stock'
        }
    ]


    const { url } = useRouteMatch();

    const linkList = productData.map((product) => {
        return(
            <li key={product.id}>
                <Link to={`${url}/${product.id}`}>{product.name}</Link>
            </li>
        )
    })

    return (
        <div>
            {/*  /product - display a list of product  */}
            {/*  /product/:productId */}

            <div>
                <div>
                    <h3>Products</h3>
                    <ul>{linkList}</ul>
                </div>
            </div>

            <Route path={`${url}/:productId`}>
                <Product data={productData} /> 
            </Route>
            <Route exact path={url}>
                <p>Please select a product .</p>
            </Route>
            
        </div>
    )
}

export default Products;
