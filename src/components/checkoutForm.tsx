import React, { useState, useEffect } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const API_URL =' process.env.API_URL';

    fetch(`${API_URL}/stripe/create-payment-intent/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.message || 'Failed to create payment intent');
        }
      })
      .catch((err) => setError('An error occurred: ' + err.message));
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://your-domain.com/order-success',
      },
    });

    if (result.error) {
      setError(result.error.message || 'An unknown error occurred.');
    } else {
      setError(null);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {clientSecret && <PaymentElement />}
      <div className='text-center'>
        <button
          type="submit"
          className='px-5 py-2 rounded-lg bg-blue-600 text-white duration-300 hover:bg-blue-700 active:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed'
          disabled={!stripe || !elements || isProcessing || !!error}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default CheckoutForm;
