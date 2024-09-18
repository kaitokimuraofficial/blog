type Prop = {
  statusNumber: number;
  text: string;
};

export const Error = ({ statusNumber, text }: Prop) => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusNumber || text}</i>
      </p>
    </div>
  );
};
