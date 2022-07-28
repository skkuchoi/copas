//커스텀 훅
import { useEffect, useState } from 'react';

const useDetectClose = (elem, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  //useEffect의 deps가 존재하므로, deps가 mount될 때 function을 실행한다.
  useEffect(() => {
    const onClick = (e) => {
      if (e.current !== null && !elem.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    
    // 그 영역 바깥을 누르면 없어짐.
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen, elem]); //useEffect의 deps: [isOpen]과 Element
  return [isOpen, setIsOpen];
};

export default useDetectClose;
