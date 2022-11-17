// import "./newProduct.css";
import '../css/page/newArea.css'


function NewArea() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Area nueva</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Nombre</label>
          <input type="text" placeholder="Area 1B" />
        </div>
        <button className="addProductButton">Crear</button>
      </form>
    </div>
  );
}

export default NewArea;