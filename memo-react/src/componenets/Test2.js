import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Test2 = () => {
    const location = useLocation();

    return(
        <div>
            <h3>SELECT문</h3>
            
                <ul>
                    <li> <Link to ="/">home </Link><br/><Link to ="/project/velopert">project </Link></li>
                    
                    <li>ANY,SOME<br/>-ANY는 SOME와 동일한 의미로 서브쿼리의 여러 개의 결과 중 한 가지만 만족해도 가능</li><br/>
                    <li>ALL<br/>- 서브쿼리의 결과 중 여러 개의 결과를 모두 만족해야 가능</li><br/>
                    <li>ORDER BY<br/>-출력되는 순서를 조절하는 구문<br/>-ASC는 오름차순(디폴트값으로 생략가능)<br/>-DESC는 내림차순</li><br/>
                    <li>DISTINCT<br/>-중복된 것을 1개씩만 출력해주는 구문</li><br/>
                    <li>LIMIT<br/>-MYSQL의 부담을 줄여주기 위해 출력개수를 제한해주는 구문</li><br/>
                </ul><br/>
        <p>쿼리스트링 : {location.search}</p>
        </div>
    )
}

export default Test2;