import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
function Navbar({ setSrc, setFiles, setText }) {
  const [showUpload, setShowUpload] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <nav className="grid-columns">
          <div className="img-wrapp">
            <a href="https://starmagnit.ru">
              <img
                src="https://starmagnit.ru/assets/templates/images/logo.png"
                alt="Логотип StarMagnit"
              />
            </a>
            <div className="img-text">
              <h2>Производство магнитов</h2> <span>и сувенирной продукции</span>
            </div>
          </div>

          <ul className="phone-wrapp">
            <li>
              <FaPhoneAlt
                className="icon-prev"
                color="#e3c115"
                size={"1.4em"}
              />
              <a href="tel:+74952552711">+7 495 255-27-11</a>
            </li>
            <li>
              <FaEnvelope
                className="icon-prev"
                color="#e3c115"
                size={"1.4em"}
              />
              <a href="mailto:info@starmagnit.ru">info@starmagnit.ru</a>
            </li>
          </ul>
        </nav>
        <button
          className="addElementButton"
          onClick={() => setShowUpload(!showUpload)}
        >
          <AiOutlinePlus />
        </button>
        <div className={`addObject ${!showUpload ? "hidden" : ""}`}>
          <div className={`btn-add `}>
            Изображение
            <input
              type="file"
              onChange={(e) => {
                let fr = new FileReader();
                fr.onload = function (e) {
                  setSrc(e.target.result);
                  setFiles((pre) => [...pre, { src: e.target.result }]);
                };
                fr.readAsDataURL(e.target.files[0]);
              }}
              id="file"
            />
          </div>
          <div
            className={`btn-add`}
            onClick={() => {
              setText("Hello, world");
              setFiles((pre) => [
                ...pre,
                {
                  src: "https://get.wallhere.com/photo/black-simple-background-minimalism-typography-text-white-background-logo-writing-brand-shape-line-font-product-39761.jpg",
                },
              ]);
            }}
          >
            Текст
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
