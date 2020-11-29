import React from 'react';
import { useRouter } from 'next/router';

const ProducItem = () => {
  const router = useRouter();

  return <div>Este es main product:{router.query.id}</div>;
};

export default ProducItem;
