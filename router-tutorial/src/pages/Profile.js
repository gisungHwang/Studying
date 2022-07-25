import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    velopert: {
        name : '문경혀이',
        description :'프론트엔드를 꿈꾸는 개발자',
    },
    gildong: {
        name : '문경혀이',
        description :'고전 소설 춘향전의 주인공'
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
            </div>
    ) : (
        <p>존재하지 않는 프로필입니다.</p>
    )}    
        </div>
    );
};

export default Profile;