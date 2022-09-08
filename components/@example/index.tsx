import { FC, useEffect, useState } from "react";
import ExampleProps from "../../interfaces/example";

const ExampleTitle: FC<ExampleProps> = ({ title }) => {
  const [state, setState] = useState<boolean>(false);

  useEffect((): void => {
    setState(true);
  }, []);

  return <div>{state && <h1>{title}</h1>}</div>;
};

export default ExampleTitle;
