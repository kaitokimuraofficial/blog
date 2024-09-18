import { useRouteError } from 'react-router-dom';
import { Error } from 'src/stories/Templates/Error';

type ErrorType = {
  statusNumber: number;
  text: string;
};

export const ErrorPage = () => {
  const errorMessage = useRouteError() as ErrorType;

  return (
    <Error statusNumber={errorMessage.statusNumber} text={errorMessage.text} />
  );
};
