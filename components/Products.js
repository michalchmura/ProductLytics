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
  // console.log(productsData);

  productsData.forEach((p) => {
    data[p.id] = parseInt(p.votes, 10);
  });
  // productsData.forEach((p) => {
  //   console.log(p);
  //   p.forEach((_p, i) => {
  //     data[i] = parseInt(_p.votes, 10);
  //   });
  // });
  // productsData.forEach((p, i) => {
  //   data[i] = parseInt(p.votes, 10);
  // });

  return [data];
};
const Chart = ({ analyticsData }) => {
  console.log('analyticsData', analyticsData);
  if (analyticsData && analyticsData.length > 0) {
    return (
      <LineChart width={900} height={500} data={analyticsData}>
        {Object.keys(analyticsData[0]).map(k => (k !== 'date' ? (
          <Line type="monotone" dot={false} dataKey={k} stroke="#8884d8" strokeWidth={2} />
        ) : null))}
        <Tooltip />
        <YAxis />
        <XAxis dataKey="date" />
      </LineChart>
    );
  }
  return null;
};

const Products = (props) => {
  const { context } = props;
  return (
    <LoadingComponent isLoading={context.isLoadingApi} isError={context.apiError}>
      <Chart analyticsData={context.analyticsData} />

      {context.productsData.map((product, index) => (
        <p key={index}>
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
      ))}
    </LoadingComponent>
  );
};

export default Products;
