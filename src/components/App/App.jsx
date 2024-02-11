import { PageTitle } from "../PageTitle/PageTitle";
import { Button } from "../Button/Button";
import { PaymentList } from "../PaymentList/PaymentList";
import payments from "../payments.json";

export const App = () => {
  return (
    <>
      <PageTitle>Paymants</PageTitle>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <PaymentList payments={payments} />
    </>
  );
};
