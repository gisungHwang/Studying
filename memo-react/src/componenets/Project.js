import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: '문경현',
        description: '리액트를 좋아하는 개발자',
    },
    gisung : {
    name: '전우진',
    description: '그냥 코딩을 좋아하는 남자'
    }
};

const Project = () => {
    const params = useParams();
    const project = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
        <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </div>
        </div>
    );
};

export default Project;