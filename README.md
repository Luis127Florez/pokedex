<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Running the app
```bash
# Clonar el repositorio

# Ejecutar
$ yarn install

# Tener Nest CLI instalado
$ npm i -g @nestjs/cli

#  la base de datos
$ docker-compose up -d

# Reconstruir la base de datos con la semilla
$ http://localhost:3000/api/v2/seed

_______________________________________________________________________________


# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```