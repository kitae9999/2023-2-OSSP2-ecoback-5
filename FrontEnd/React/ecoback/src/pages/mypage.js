import BadgeGrid from '../seulgi/myBadge.js';
import '../seulgi/mypage.css'
import TitleBanner from '../components/TitleBanner.js';
//import Backbutton from 'kitae/backbutton.js';

import {Link} from 'react-router-dom';



const MyPage=()=>{
    return (
        <div style={{backgroundColor:"#F9F9F9"}}>
            <TitleBanner />
            <hr />
            <div className="profileContainer">
                <div id="username">홍길동님의 프로필</div>
                <div className="faceImage" style={{padding: "5vw"}}>
                    <img id="faceImage" src={require('../image/userProfile.png')} alt="faceImg" />
                    <p style={{fontSize:"3vw"}}><b>2023년 10월 1일부터 함께하는 중</b></p>

                    <Link to="/editprofilepage">
                    <button id="editProfile">프로필 편집</button>
                    </Link>
<<<<<<< HEAD:FrontEnd/React/ecoback/src/pages/mypage.js

                    

=======
                    {/*프로필 편집 부분이 2번 표시되어 주석처리 해놓았습니다.
                    <Link to="/editprofilepage"><button id="editProfile">프로필 편집</button></Link>
                    */}
>>>>>>> eb9dffde7b0c58648871e2dd5a80f0a8457bf48d:FrontEnd/React/ecoback/src/seulgi/mypage.js
                </div>
            </div>
            <hr />
            <div className="badgeCollection">
                <div id='badgeText'>내가 모은 배지</div>
                <div id="badgeCount">6/12</div>
                <BadgeGrid />
            </div>
        </div>
    )
}

export default MyPage;