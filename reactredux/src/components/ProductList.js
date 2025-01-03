import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from '../redux/actions/ProductAction'

const ProductList=()=>
{
    const products=useSelector((state)=> state.allProducts.products);
    const dispatch =useDispatch();

    fetchdata= async()=>
    {
        const response= await axios.get("https://fakestoreapi.com/products").catch((err)=>
        {
            console.log("error occured, err");
        });
        dispatch(setProduct(response.data));
    }

    useEffect(()=>
    {
        fetchdata();
    },[]);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductList;