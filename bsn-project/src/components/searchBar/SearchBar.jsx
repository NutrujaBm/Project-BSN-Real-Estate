import "./searchBar.scss";
import slider from '/icons-slider.png';
import search from '/icons-search.png';

function SearchBar() {
    return (
        <div className="searchBar">
            <div className="type">
                <form className="flex-form">
                    <select name="province" defaultValue="">
                        <option value="">เลือกจังหวัด</option>
                        <option value="bangkok">กรุงเทพมหานคร</option>
                        <option value="pathum-thani">ปทุมธานี</option>
                    </select>
                    <select name="type-re" defaultValue="">
                        <option value="">เลือกประเภท</option>
                        <option value="condo">คอนโด</option>
                        <option value="apartment">อพาร์ทเมนต์</option>
                    </select>
                    <input 
                        type="number" 
                        name="price" 
                        min={0}
                        max={10000000}
                        placeholder="ราคา"
                    />
                    <button type="button" className="slider-button">
                        <img src={slider} alt="Slider" />
                    </button>
                    <button type="submit" className="search-button">
                        <img src={search} alt="Search" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;
