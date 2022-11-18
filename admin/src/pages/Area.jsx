import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/page/area.css'
import Chart from '../components/Chart';
import { productData } from "../dummyData";
import { Publish } from '@material-ui/icons'
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

function Area() {

  const { id } = useParams()
  const { data, loading, reFetch } = useFetch(`/area/${id}`);
  const [area, setArea] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setArea((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (area.name.length !== 0) {
      try {
        await axios.put(`http://localhost:8800/api/area/${data._id}`, area);
        reFetch()
      } catch (err) {
        console.log(err)
      }
    }
  };

  useEffect(() => {
    setArea(data)
  }, [data])
  return (
    <div className="product">
      {
        loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="productTitleContainer">
              <h1 className="productTitle">Area</h1>
              <Link to="/newproduct">
                <button className="productAddButton">Crear</button>
              </Link>
            </div>
            <div className="productTop">
              <div className="productTopRight">
                <div className="productInfoTop">
                  <span className="productName">Area: {data.name}</span>
                </div>
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id: </span>
                    <span className="productInfoValue"> {data._id}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="productBottom">
              <form className="productForm">
                <div className="productFormLeft">
                  <label>Nombre del area</label>
                  <input type="text" name="name" value={area.name} onChange={handleChange}  />
                </div>
                <div className="productFormRight">
                  <button type="submit" onClick={handleSubmit} className="productButton">Editar</button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Area;