import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;
const STRIPE_KEY = import.meta.env.VITE_STRIPE_KEY;
const stripePromise = loadStripe(STRIPE_KEY);

interface PaymentFormProps {
  amount: number;
  currency: string;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, currency, setIsSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      const cardElement = elements.getElement(CardElement);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement!,
        billing_details: {
          email,
        },
      });

      if (error) {
        toast.error(error.message || 'An unknown error occurred');
        setIsProcessing(false);
        return;
      }

      if (paymentMethod) {
        const response = await fetch(`${API_URL}/../stripe/create-payment-intent`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            payment_method_id: paymentMethod.id,
            amount,
            currency,
          }),
        });

        const result = await response.json();
        console.log(result);
        if (result.error) {
          toast.error(result.error);
        } else if (!result.status || result.status !== 'success') {
          toast.error(result.detail);
        } else {
          toast.success('Payment succeeded!');
          setIsSuccess(true);
        }
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-meta-3">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-meta-8 rounded-md shadow-sm focus:ring-meta-4 focus:border-meta-4"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-meta-3">Card Details</label>
        <div className="mt-1 p-2 border border-meta-8 rounded-md shadow-sm">
          <CardElement options={cardStyle} />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-meta-5 hover:bg-opacity-90 text-white p-3 rounded-md mt-4 font-semibold transition"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? 'Processing...' : `Pay £${(amount / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

const Payment: React.FC<{ amount: number, setIsSuccess: React.Dispatch<React.SetStateAction<boolean>> }> = ({ amount, setIsSuccess }) => (
  <Elements stripe={stripePromise}>
    <PaymentForm amount={amount} setIsSuccess={setIsSuccess} currency="gbp" />
  </Elements>
);

export default Payment;