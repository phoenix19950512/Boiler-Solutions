import { FC } from "react";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe('pk_test_51PwqFqBOqa7fnofGnrTKcKEIo756UlcQDMjeDeD5PHaiamW237gxWuUWIrq2sfqGYXUGohDTUAJTF0SqPLLlGhGm002a1IvgTY');

export const StripeComponent: FC = props => {
  return <>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </>
}