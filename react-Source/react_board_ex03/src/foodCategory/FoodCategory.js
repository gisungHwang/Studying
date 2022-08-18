import React from 'react';
import { useNavigate } from '../../node_modules/react-router-dom/index';

const FoodCategory = () => {
  const navigate = useNavigate();

  return (
    <div>
      <input
        type='button'
        value='업주 등록'
        onClick={() => { navigate('/board'); }}
      />
    </div>
  );
};

export default FoodCategory;