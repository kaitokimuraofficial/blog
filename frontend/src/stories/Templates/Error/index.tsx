type Prop = {
  statusNumber: number;
  text: string;
};

export const Error = ({ statusNumber, text }: Prop) => {
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusNumber || text}</i>
      </p>
    </>
  );
};
