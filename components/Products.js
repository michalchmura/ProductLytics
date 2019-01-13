import styled from 'styled-components';
import { Fragment } from 'react';
import {
  LineChart, Line, Tooltip, YAxis, XAxis, CartesianGrid,
} from 'recharts';
import LoadingComponent from './LoadingComponent';

const Votes = styled.span`
  font-weight: bolder;
  color: green;
`;

const Comments = styled.span`
  color: blue;
`;

const Title = styled.p`
  color: red;
`;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const formatProductVotes = (productsData) => {
  const data = {};

  productsData.forEach((p, i) => {
    data[i] = parseInt(p.votes);
  });

  return [data];
};

const Products = (props) => {
  const { context } = props;
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <LoadingComponent isLoading={context.isLoadingApi} isError={context.apiError}>
      <LineChart width={900} height={500} data={formatProductVotes(context.productsData)}>
        {Object.keys(formatProductVotes(context.productsData)[0]).map(k => (
          <Line type="monotone" dataKey={k} stroke="#8884d8" strokeWidth={2} />
        ))}
        <YAxis />

        {/* <Line type="monotone" dataKey="uv" stroke="#732f" strokeWidth={2} />
      <Line type="monotone" dataKey="amt" stroke="#123f" strokeWidth={2} /> */}
      </LineChart>
      {context.productsData.map(product => (
        <Fragment>
          <p>
            <Votes>{product.votes}</Votes>
            {' '}
|
            <Comments>
              {' '}
              {product.comments}
            </Comments>
            {' '}
::
            <strong>
              {' '}
              {product.name}
            </strong>
            {' '}
-
            {product.description}
          </p>
          {/* <Title>{product.name}</Title> */}
        </Fragment>
      ))}
    </LoadingComponent>
  );
};

export default Products;
