## SEQUELIZE INSTALLATION

    npm i mysql2
    npm i sequelize sequelize-cli
    npx sequelize init
    npx sequelize db:create

    npx sequelize model:generate --name User --attributes email:String,password:String
    npx sequelize db:migrate

#### Role model

    npx sequelize model:generate --name Role --attributes name:String
    npx sequelize db:migrate
    SYNC db to add User_Roles table for many-to-many
        if (process.env.DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }

    Create seed file for roles:
    npx sequelize seed:generate --name add-roles
    npx sequelize db:seed --seed 20240725092903-add-roles.js
