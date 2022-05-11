import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [data, setData] = useState({});
  function toggle() {
    console.log(isShowing);
    setIsShowing(!isShowing);
  }
  
  function setProduct(product) {
    console.log(data);
    setData(product)
  }

  return {
    isShowing,
    toggle,
    setProduct,
    data
    
  }
};

export default useModal;