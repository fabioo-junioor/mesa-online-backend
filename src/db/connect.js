import mysql from 'mysql2/promise';

const connect = async () => {
    if(global.connection && global.connection.state !== 'disconectd'){
        return global.connection

    }
    const conn = await mysql.createConnection({
        host: process.env.DBHOST,
        port: process.env.DBPORT,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBDATABASE
    });
    console.log('Conectou ao MySql!');
    global.connection = conn;
    return conn;

}

export default connect;