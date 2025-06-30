import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {

    const {id} = useParams();
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect (() => {
        const mockOrderDetails = {
            _id : id,
            createdAt : new Date(),
            isPaid : true,
            isDelivered : false,
            paymentMethod : "PayPal",
            shippingMethod : "Standard",
            shippingAddress : {city : "New York", country : "USA"},
            orderItems : [
                {
                productId : "1",
                name : "Jacket",
                price : 120,
                quantity : 1,
                image : "https://picsum.photos/150?random=1"
                },
                {
                productId : "2",
                name : "Jacket",
                price : 120,
                quantity : 1,
                image : "https://picsum.photos/150?random=2"
                },
                {
                productId : "3",
                name : "Jacket",
                price : 120,
                quantity : 1,
                image : "https://picsum.photos/150?random=3"
                },
            ]
        };
        setOrderDetails(mockOrderDetails);
    },[id]);

    return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6' >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 ">Order Details</h2>
        {!orderDetails ? (
            <p>No Order Details Found</p>
        ) : (
            <div className="p-4 sm:p-6 rounded-lg border">
                {/* Order Info  */}
                
            </div>
        )}
      
    </div>
  )
}

export default OrderDetailsPage
