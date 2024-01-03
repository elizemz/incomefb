const { sql } = require("../config/pgDb");

const createTables = async () => {
	console.log("CREATING TABLE...");
	// await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
	// await sql`CREATE TYPE transenum AS ENUM ('inc', 'exp')`;
	await sql`CREATE TABLE IF NOT EXISTS transaction(
		id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
		user_id foreign key,
		name TEXT NOT NULL,
		amount real not null,
		transaction_type transenum,
		description text not null,
		createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		category_id foreign key);
	`;
	console.log("CREATED TABLE.");
};

// const insertData = () => {};

createTables();
// insertData()
