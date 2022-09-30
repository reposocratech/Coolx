import React, {useState} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'
import "./stripe.scss"


const stripePromise = loadStripe("pk_test_51LnIA1J5n5ohBaXPnr6gxHm2Hu7UeuRDJgkrBYRyKTPtTpYPcSqXeR94KsiMCPjo4vFdlcPi5jllaVS5dAGrdoT6005G5Uk9aw")


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        setLoading(true)

        if (!error) {
            const { id } = paymentMethod;
            
            try {
                const {data} = await axios.post('http://Localhost:4000/stripe/api/checkout', {
                id,
                amount: 10000
            })

            console.log(data);
            elements.getElement(CardElement).clear()
                
            } catch (error) {
                console.log(error);
            }

            setLoading(false)

            
        }


    };

    return <form onSubmit={handleSubmit} className="card card-body credit">
        <h3 className='text-center my-2'>Precio: 100€</h3>
        <div className="form-group">
        <CardElement className='form-control'/>
        </div>
        <button className='btn btn-success' disabled={!stripe}> 
            {loading ? (
                <div className='spinner-border text-light' role="status"><span className='sr-only'></span></div>

            ) : "Comprar"}
        </button>
    </form>
};

export const Stripe = () => {


    return (
        <Elements stripe={stripePromise}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <CheckoutForm/>
                    </div>
                </div>
            </div>
            
        </Elements>
    );
};
