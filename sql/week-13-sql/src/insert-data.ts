import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do12334@gmail.com', 'hashed_password_here_'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries-4', 'Milk, bread, butter and eggs', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);
 
    console.log("Entries created!");
}



createEntries();