import { useParams } from "react-router-dom";
import Test1_1 from './Test1_1';
import TEST2 from './Test2';
import Test3 from './Test3';

const data = {
    
    gisung : {
    description: <Test1_1/>
    },

    velopert: {
        description: <Test3/>
    },
    
    // velopert: {
    //     description: <Test4/>
    // },

};

const Project = () => {
    const params = useParams();
    const project = data[params.username];

    return (
        
        <div>
            {/* <h2>{project.name}</h2> */}
            <p>{project.description}</p>
        </div>
    
    );
};

export default Project;