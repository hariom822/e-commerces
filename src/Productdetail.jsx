import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
const productdetail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        showdata()

    }, [id])
    const showdata = async () => {
         
        const result = await axios(`https://dummyjson.com/products/${id}`)
        setProduct(result.data)
    }
    
    return (
        <div className='p-5'>
   
            <div className='border-2 h-auto  bg-gray-400 w-full pl-100 pl-2 font-bold gap-10'>
                <LazyLoadImage className='h-70 hover:scale-117'
                    src={product.images} alt={product.title}/>
                Title:-{product.title}<br />
                <p className='font-bold text-4xl text-green-900'>Price:-${product.price}</p>
                Category:- {product.category}<br />
                DiscountPercentage:- {product.discountPercentage}<br />
                Rating:- {product.rating}<br />
                Stock:- {product.stock}<br />
                tags:- {product.tags}<br />
                brand:- {product.brand}<br />
                sku:- {product.sku}<br />
                weight:- {product.weight}<br />
              {product.dimensions && (
               <div>
                 <p>Width: {product.dimensions.width}</p>
                  <p>Height: {product.dimensions.height}</p>
                   <p>Depth: {product.dimensions.depth}</p>
                 </div>
                  )} 
                warrantyInformation:- {product.warrantyInformation}<br />
                shippingInformation:- {product.shippingInformation}<br />
                availabilityStatus:- {product.availabilityStatus}<br />
               
                {/* meta{product.meta.createdAt} */}
                reviews:-{product.reviews?.map((x)=>
                <div>
                    rating:-{x.rating}<br/>
                    comment:-{x.comment}<br/>
                    date:-{x.date}<br/>
                    reviewerName:-{x.reviewerName}<br/>
                    reviewerEmail:-{x.reviewerEmail}<br/>
                </div>
                )}
                 returnPolicy:-{product.returnPolicy}<br/>
                minimumOrderQuantity:-{product.minimumOrderQuantity}<br/>
                 meta:- createdAt:-{product.meta?.createdAt}<br/>
                 updatedAt:-{product.meta?.updatedAt}<br/>
                 barcode:-{product.meta?.barcode}<br/>
                 qrCode:-{product.meta?.qrCode}<br/>
                

                
                
            </div>
        </div>
    )
}

export default productdetail
