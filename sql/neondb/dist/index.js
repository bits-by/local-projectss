"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const client = new Client({
//   connectionString: "postgresql://vivekraut4797:l0XrSEV1TMyP@ep-sweet-haze-a5hjs1df.us-east-2.aws.neon.tech/postgress?sslmode=require"
// })
//drop table
// async function dropTable() {
//     await client.connect();
//     const res = await client.query("DROP TABLE users");
//     console.log("Drop table Successsfully  ", res);
// }
// dropTable();
//creating table in DB....
// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
//     `) 
//     console.log(result)
// }
// createUsersTable();
//Insert Data into table and use SQL Injection....
// async function insertData() {
//     const client = new Client({
//         connectionString: "postgresql://vivekraut4797:l0XrSEV1TMyP@ep-sweet-haze-a5hjs1df.us-east-2.aws.neon.tech/postgress?sslmode=require"
//     });
// try{
//     await client.connect();   //ensure client connecito is established..
//     const insertQuery = `
//         INSERT INTO users (username, email, password) VALUES ('username1', 'user1@exmaple.com', 'user1_password' );
//     `
//     const res = await client.query(insertQuery);
//     console.log('Insertion success:', res);
// } catch (err) {
//     console.error('Error during the insertion', err);
// } finally {
//     await client.end();  //close the client connection..
// }
//     try{
//         await client.connect();
//         const insertQuerty =`
//             INSERT INTO users (username, email, password) VALUES ('username2', 'user2@exmaple.com', 'user2_password' );
//         `
//         const res = await client.query(insertQuerty);
//         console.log('Insertion Success:', res);
//     }catch(err) {
//         console.error('Error during the insertion', err);
//     } finally {
//         await client.end();
//     }
// }
// insertData();
/// function getUser that let you fetch data from the database as iinput...
// async function getUser(email: string){
//     const client = new Client({
//                 connectionString: "postgresql://vivekraut4797:l0XrSEV1TMyP@ep-sweet-haze-a5hjs1df.us-east-2.aws.neon.tech/postgress?sslmode=require"
//             });
// try {
//     await client.connect();
//     const query= `SELECT * FROM users WHERE email = $1`;
//     const value = [email];
//     const res = await client.query(query, value);
//     console.log('Fetching user Success', res)
// }catch (err) {
//     console.error('Error during fetching user:', err);
//     throw err;
// }
// finally {
//     await client.end(); // Close the client connection
//   }
// }
// getUser('user2@exmaple.com').catch(console.error);
