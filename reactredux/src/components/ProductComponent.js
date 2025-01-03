import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
const ProductComponenet=()=>
{      
    const products=useSelector((state)=>State.allProducts.products);
    const renderList=product.map((product)=>{

        const {id ,title,img,price,ategory}=product;
        return(
            <div className="four wide column">
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                          <div className="header">{title}</div>
                          <div className="meta price">${price}</div>
                          <div className="meta">{category}</div>

                        </div>
                    </div>
                </div>
                </Link>
            </div>
           )
    })

    return(
        <div>
        {renderList}
        </div>
    )
       
}
export default ProductComponenet;