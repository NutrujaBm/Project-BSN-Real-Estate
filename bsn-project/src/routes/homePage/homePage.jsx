import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss";
import bg from '/bg-home.jpg';

function HomePage(){
  return (
    <div 
      className="homePage" 
      style={{ backgroundImage: `url(${bg})` }}
    >
        <div className="textContainer">
            <div className="wrapper">
                <h1 className="title">
                    เราจะช่วยคุณค้นหาสถานที่ที่คุณชื่นชอบ
                </h1>
                <p>
                    ด้วยแหล่งขายบ้านและอสังหาริมทรัพย์ใกล้ตัวคุณ
                </p>
                <SearchBar/>
            </div>
        </div>
    </div>
  )
}

export default HomePage;
