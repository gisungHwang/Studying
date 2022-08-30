import React, { useState } from 'react';
import AddressPopup from './AddressPopup';
import AddressPostCode from './AddressPostCode';

const StoreAddress = () => {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true)
  }

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false)
  }

  return (
    <div>
      {/* 버튼 클릭 시 팝업 생성 */}
      <button type='button' onClick={openPostCode}>우편번호 검색</button>
      {/* 팝업 생성 기준 div */}
      <div id='popupDom'>
        {isPopupOpen && (
          <AddressPopup>
            <AddressPostCode onClose={closePostCode} />
          </AddressPopup>
        )}
      </div>
    </div>
  )
};

export default StoreAddress;