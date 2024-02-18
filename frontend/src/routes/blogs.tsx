import { useLoaderData } from "react-router";
import styled from "styled-components";

export default function Blogs() {
  const data = useLoaderData() as unknown as {hello: String};


  return <P>{data.hello}</P>;
}


const P = styled.p`
color: blue;
`;