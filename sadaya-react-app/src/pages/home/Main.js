import "./Main.css";
import logo from "../../img/logo-sadaya.png";
import ply from "../../img/imgply.png";
import hp from "../../img/hp2.png";
import wa from "../../img/whatsapp.png";
import tel from "../../img/telegram.png";

function Main() {
  return (
    <div className="body">
      <div className="container">
        <nav>
          <a className="linkdaftar" href="/">
            <div className="brand">
              <img className="logo-brand" src={logo} alt="Logo Sadaya" />
            </div>
          </a>

          <div class="dropdown">
            <div className="ply">
              <a
                className="linkdaftar"
                href="http://sadaya.otoreport.com/harga.js.php?id=0647d8179511645cf66093efb588bfeaf37f8f8eb794660f3ed24f544ae217f1e854d023183be46445d7af66a143c561-4"
              >
                <div className="harga-btn">HARGA</div>
              </a>
            </div>
            <div class="dropdown-content">
              <a href="http://sadaya.otoreport.com/harga.js.php?id=5415fe9244cc2b980f61d4eb4b7cb1190677e09a98b6850dc835324c016f7ae5f34a463eb2ffd0124bb3ce16e89cd242-12">
                Pulsa
              </a>
              <a href="http://sadaya.otoreport.com/harga.js.php?id=697e618307319d9ea1f177a30e2f1557f104886a0c5500d703ecd7c66c61fb089639f55ebc080528e5b7f17edd7b4d57-11">
                Kuota
              </a>
              <a href="http://sadaya.otoreport.com/harga.js.php?id=e52a7c3a738ea652ffea1a4010c41d49e6cc4a1caa41d05c381f4705f6b9c7b537f1290cc8051ac1327360eccbeb407f3b43-13">
                Token PLN
              </a>
              <a href="http://sadaya.otoreport.com/harga.js.php?id=8d3ac64a85fd824e3dd6c11ac9970016355e94ae0b581a6c8fad1b1e9d94c0de2bf37eb68c83e5f10b0cdaf62bbcb884-14">
                Topup Game
              </a>
            </div>
          </div>
        </nav>
        <div className="conten">
          <div className="kiri">
            <div className="kiri-wrapper">
              <div className="brand-name-wrapper">
                <h1 className="brand-name1">mobile</h1>
              </div>
              <h1 className="brand-name">Sadaya</h1>
              <h2 className="brand-name2">Lebih mudah,Lebih dekat</h2>
              <h5 className="brand-con">
                Aplikasi TopUp Pulsa Reguler dan Pembayaran Tagihan PPOB
              </h5>
              <div className="btn-btn">
                <a
                  href="http://sadaya.otoreport.com/formagen.php?id=4884b0afa4597c5306c2766fcae31fd8c1dced1c023b62b6664a50d3088ed7cf9ef93fe9728268c383fca6f31e97741d-9"
                  className="linkdaftar"
                >
                  <div className="btn-daftar">DAFTAR</div>
                </a>
                <a
                  className="linkdaftar2"
                  href="https://play.google.com/store/apps/details?id=com.otoreport.sadaya"
                >
                  <img className="img-ply" src={ply} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="kanan">
            <img src={hp} alt="Logo HP" />
          </div>
          <div className="sosmed">
            <a className="linkdaftar" href="https://wa.me/085158619943">
              <img className="btn-sosmed" src={wa} alt="" />
            </a>
            <a className="linkdaftar" href="/">
              <img className="btn-sosmed" src={tel} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
