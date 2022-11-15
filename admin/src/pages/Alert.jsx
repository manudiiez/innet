import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import '../css/page/user.css'


function Alert() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar alerta</h1>
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
                    <div className="userUpdateItem">
                        <div className="newAlertGender">
                            <h3>Categoria</h3>

                            <div>
                                <input type="radio" name="gender" id="male" value="male" />
                                <label for="male">Sin atender</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="male" value="male" />
                                <label for="male">Resuelta</label>
                            </div>
                        </div>
                        <button>Editar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alert;