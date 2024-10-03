const mysql=require('mysql2');

const pool= mysql.createPool({
    host : 'localhost',
    password : 'manager',
    user : 'root',
    port : 3306,
    database : 'expense_tracker',
    connectionLimit : 10
})

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connected successfully.');
        connection.release(); // Release the connection after testing
    }
});

module.exports= {
    pool
}