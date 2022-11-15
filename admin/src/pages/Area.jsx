import { Link } from "react-router-dom";
import '../css/page/product.css'
import Chart from '../components/Chart';
import { productData } from "../dummyData";
import {Publish} from '@material-ui/icons'

function Area() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Area</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Crear</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopRight">
              <div className="productInfoTop">
                  <span className="productName">Area 1B</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Pacientes:</span>
                      <span className="productInfoValue">21</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Nombre del area</label>
                  <input type="text" placeholder="Area 1B" />
              </div>
              <div className="productFormRight">
                  <button className="productButton">Editar</button>
              </div>
          </form>
      </div>
    </div>
  );
}

export default Area;