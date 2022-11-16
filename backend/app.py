# --  IMPORTES --
from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS

# -- DEFINICIÓN DE APP COMO OBJETO DE FLASK --
app = Flask(__name__)
CORS(app)

# -- CONFIGURACIÓN DE MYSQL --
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'inet_db'
mysql = MySQL(app)

# -- CREAR ÁREA --
@app.route('/crear_area', methods=['POST'])
def crear_area():
    content = request.json['nombre_area']
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO areas(nombre) VALUES ('+ '"' + content + '"' +')')
    mysql.connection.commit()
    return(jsonify(content))

# -- CREAR PERSONA --
@app.route('/crear_persona', methods=['POST'])
def crear_persona():
    nombre = request.json['nombre_persona']
    apellido = request.json['apellido_persona']
    dni = request.json['dni_persona']
    tipo = request.json['tipo_persona']
    cur = mysql.connection.cursor()
    print('INSERT INTO personas(nombre_persona, apellido_persona, dni_persona, tipo_persona) VALUES ('+'"'+nombre+'",'+'"'+apellido+'",'+dni+','+'"'+tipo+'"'+')')
    cur.execute('INSERT INTO personas(nombre_persona, apellido_persona, dni_persona, tipo_persona) VALUES ('+'"'+nombre+'"'+'"'+apellido+'"'+'"'+dni+'"'+'"'+tipo+'"'+')')
    mysql.connection.commit()
    return(jsonify('Ok!'))

# -- CREAR USUARIO --
@app.route('/crear_usuario', methods=['POST'])
def crear_usuario():
    nombre_usuario = request.json['nombre_usuario']
    contraseña = request.json['contraseña']
    area = request.json['area']
    
    cur = mysql.connection.cursor()
    cur.execute('INSERT INTO usuarios (nombre_usuario, contraseña, id_area_fk) VALUES (%s, %s, %s)', (nombre_usuario, contraseña, area))

# -- VER USUARIOS --
def userObj(row):
    return {
        "id" : row[0],
        "nombre_usuario" : row[1],
        "id_persona_fk" : row[2],
        "id_area_fk" : row[3],
        "contraseña" : row[4]
    }

@app.route('/ver_usuarios')
def ver_usuarios():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM usuarios')
    usuarios = cur.fetchall()
    usuarios = [userObj(x) for x in usuarios]
    return(jsonify(usuarios))

# -- VER PERSONAS --
def personObj(row):
    return {
        "id" : row[0],
        "nombre_persona" : row[1],
        "apellido_persona" : row[2],
        "dni_persona" : row[3],
        "tipo_persona" : row[4]
    }

@app.route('/ver_personas')
def ver_personas():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM personas')
    usuarios = cur.fetchall()
    usuarios = [personObj(x) for x in usuarios]
    return(jsonify(usuarios))

# -- VER PERSONAS --
def areaObj(row):
    return {
        "id" : row[0],
        "nombre" : row[1]
    }

@app.route('/ver_areas')
def ver_areas():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM areas')
    usuarios = cur.fetchall()
    usuarios = [areaObj(x) for x in usuarios]
    return(jsonify(usuarios))

# -- VER ALERTAS --
def alertasObj(row):
    return {
        "id" : row[0],
        "id_usuario" : row[1],
        "lugar" : row[2],
        "hora" : row[3],
    }
@app.route('/ver_alertas')
def ver_alertas():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM alertas')
    alertas = cur.fetchall()
    alertas = [alertasObj(x) for x in alertas]
    return(jsonify(alertas))




# -- BUCLE PRINCIPAL DE LA APP --
if (__name__) == '__main__':
    app.run(port=5000, debug=True)
