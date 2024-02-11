export const Payment = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.amount}</p>
    </div>
  );
};
