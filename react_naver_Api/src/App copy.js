import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  const NAVER_CLIENT_ID = 'SPW_iLqHpIeAA3MQiJHH';
  const NAVER_CLIENT_SECRET = 'KMQWDX_p6k';

  const onClick = async () => {
    try {
      const response = await axios.get(
        '/v1/search/movie',
        {
          params: {
            query: '마블', // 이미지 검색 텍스트
            start: 1, // 검색 시작 위치
            display: 50, // 가져올 이미지 개수
          },
          headers: {
            'X-Naver-Client-Id': NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
          },
        });
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
