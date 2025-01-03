import {useParams, useDispatch} from 'react';
const ProductDetails=()=>
{
    const {productId}= useParams();
    const product = useSelector((state)=> state.product);
    const {id ,title,img,price,ategory}=product;
    const dispatch=useDispatch();
    const fetchdetails= async (id)={
        const response = await axios.get('https://fakestoreapi.com/products/${id}').catch((error)=>{
        console.log("error occured",err);
    }),
    dispatch(selectedProduct(response.data))
    }

    useEffect(()=>
    {
         if(productId && productId!==)
    });
    return()
}

export default ProductDetails;