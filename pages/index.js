import styled from 'styled-components';
import MyContext from '../components/MyContext';
import Products from '../components/Products';

const PageWrapper = styled.div`
  height: 100vh;
`;

export default () => (
  <MyContext.Consumer>
    {context => (
      <PageWrapper>
        <Products context={context} />
      </PageWrapper>
    )}
  </MyContext.Consumer>
);
