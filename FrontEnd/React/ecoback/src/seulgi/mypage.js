import BadgeGrid from './myBadge.js';
const MyPage=()=>{
    return (
        <div>
            <div className="normal" style={{ padding: '5px 7px' }}>
                <div className="title">Eco$Back</div>
                <div id="menubar_array"> 
                    <line/><line/><line/>
                </div>
            </div>
            <hr />
            <div className="proFile">
                <div>홍길동님의 프로필</div>
                <div className="faceImage">
                    <img src={require('../image/userProfile.png')} alt="faceImg" />
                    <p>2023년 10월 1일부터 함께하는 중</p>
                    <button>프로필 편집</button>
                </div>
            </div>
            <hr />
            <div className="badgeCollection">
                <div>내가 모은 뱃지</div>
                <div>6/12</div>
                <BadgeGrid />
            </div>
        </div>
    )
}

export default MyPage;