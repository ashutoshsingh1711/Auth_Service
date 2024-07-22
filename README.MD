## SEQUELIZE INSTALLATION

    npm i mysql2
    npm i sequelize sequelize-cli
    npx sequelize init
    npx sequelize db:create

    npx sequelize model:generate --name User --attributes email:String,password:String
    npx sequelize db:migrate
