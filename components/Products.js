import styled from 'styled-components';
import moment from 'moment';
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

const Chart = ({ analyticsData }) => {
  if (analyticsData && analyticsData.length > 0) {
    // Recharts won't redraw the chart unless new array gets passed as data props
    const newArray = [].concat(analyticsData);
    return (
      <LineChart width={900} height={500} data={newArray}>
        {Object.keys(newArray[0]).map(k => (k !== 'date' ? (
          <Line id={k} type="monotone" dot={false} dataKey={k} stroke="#8884d8" strokeWidth={2} />
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
