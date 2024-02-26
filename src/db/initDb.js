
const getDb = require('./getDb');

require('dotenv').config();

const main = async () => {
    let connection;
    try {

        connection = await getDb();

        console.log('Creando base de datos simplenote')
        await connection.query('CREATE DATABASE IF NOT EXISTS simplenote ')
        await connection.query('USE simplenote')
        
        console.log('Borrando tablas...')
        
        await connection.query('DROP TABLE IF EXISTS notes')
        await connection.query('DROP TABLE IF EXISTS labels')
        await connection.query('DROP TABLE IF EXISTS walls')
        await connection.query('DROP TABLE IF EXISTS users')
        
        console.log('Creando tablas')

        await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR (100) UNIQUE NOT NULL,
            email VARCHAR (100) UNIQUE NOT NULL,
            password VARCHAR (100) NOT NULL,
            avatar VARCHAR (100),
            createdAt DATETIME NOT NULL NULL DEFAULT CURRENT_TIMESTAMP ,
            modifiedAt DATETIME
        )`);
        await connection.query(`
        CREATE TABLE IF NOT EXISTS walls (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            userId INT UNSIGNED NOT NULL,
            title VARCHAR (100) NOT NULL,   
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME,
            FOREIGN KEY(userId) REFERENCES users(id)
        )
        `)
        await connection.query(`
        CREATE TABLE IF NOT EXISTS labels (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR (100) UNIQUE  DEFAULT 'Normal'
        )
        `)

        await connection.query(`
        INSERT INTO labels (name) VALUES ('Urgent'),('Important'), ('Normal'),('Low')`)

        await connection.query(`
        CREATE TABLE IF NOT EXISTS notes (
            id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
            wallId INT UNSIGNED NOT NULL,
            labelId INT UNSIGNED NOT NULL, 
            title VARCHAR (100) NOT NULL,
            text VARCHAR(400),
            image VARCHAR (100),
            file VARCHAR (100),
            status VARCHAR (10) NOT NULL DEFAULT 'pending',  
            createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            modifiedAt DATETIME,
            FOREIGN KEY(wallId) REFERENCES walls(id) ON DELETE CASCADE,
            FOREIGN KEY(labelId) REFERENCES labels(id)
        )
        `)
    
    } catch (error) {
        console.error(error)
    }
    finally{
        if(connection) connection.release();
        process.exit();
    }
}

main()
