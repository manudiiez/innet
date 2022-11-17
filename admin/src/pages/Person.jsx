import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import '../css/page/person.css'

  
  function Person() {
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Editar usuario</h1>
          <Link to="/newUser">
            <button className="userAddButton">Crear</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
                <span className="userShowUserTitle">Dermatologa</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Detalles de la cuenta</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Anna Becker</span>
              </div>
              <span className="userShowTitle">Contactos</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Palmares, Turin 9898</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Editar</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre y apellido</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Numero</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Direccion</label>
                  <input
                    type="text"
                    placeholder="Palmares, Turin 9898"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>DNI</label>
                  <input
                    type="text"
                    placeholder="441876520"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Editar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  export default Person;