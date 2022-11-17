import '../css/page/newPerson.css'


function NewPerson() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Persona nueva</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Nombre y apellido</label>
          <input type="text" placeholder="Manolito diez" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Contraseña</label>
          <input type="password" placeholder="mayor a 6" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>DNI</label>
          <input type="text" placeholder="441378913" />
        </div>
        <div className="newUserItem">
          <label>Direccion</label>
          <input type="text" placeholder="Palmares, Turin 9898" />
        </div>
        <div className="newUserItem">
          <label>Categoria</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Administrador</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Doctor</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Medico</label>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

export default NewPerson;