import React from 'react';
import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();

  return <div>Este es main product:{router.query.id}</div>;
};

export default Product;
