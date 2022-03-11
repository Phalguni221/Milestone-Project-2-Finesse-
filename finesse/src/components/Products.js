import React from 'react'
import styled from "styled-components";
import { popularProducts } from '../../../../Finesse-Project-Sweta Changes/finesse/src/data';
import Product from "./Product";

//For the whole product Comtainer
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
