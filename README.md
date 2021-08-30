# Ticket 1

<h3 align="center">Ticket 1</h3>

### Instalación

1. Clona el repositorio
2. Entra a la carpeta backend con cd backend
3. Ejecuta el archivo db.tablas.js que esta en la carpeta db
   ```sh
    nodemon .\db\db.tablas.js
   ```
3. Crea tu archivo de variables de entorno `.env`
   ```JS
      HOST = 'localhost'
      PORT = 3000

      LISTA_BLANCA = ["http://127.0.0.1:3000", "http://127.0.0.1:5500"]

      DB_HOST = 'localhost'
      DB_PORT = 1433

      DB_USR = 'sa'
      DB_PASS = '123'
      DB_NAME = ticket1_db

      SECRET_KEY = KHFAJjkj3214@ASF&/%7AZZ¿{
   ```