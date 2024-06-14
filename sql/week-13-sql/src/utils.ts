import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://xbrevtab:pJMszwCptgPbZfhRih5gPVBz3QDu_QxR@lucky.db.elephantsql.com/xbrevtab");
    await client.connect();
    return client;
}