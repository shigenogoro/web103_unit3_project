import { pool } from "./database.js";   
import "./dotenv.js"; 
import resources from "../data/resources.js"; 

const createResourcesTable = async () => {

    const createTableQuery = `
        DROP TABLE IF EXISTS resources;

        CREATE TABLE IF NOT EXISTS resources (

            id SERIAL PRIMARY KEY, 
            name VARCHAR(255) NOT NULL, 
            website VARCHAR(255) NOT NULL,
            about TEXT NOT NULL,
            phone VARCHAR(100) NOT NULL,
            location VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL
        )
    `;

    try {
        const response = await pool.query(createTableQuery);
        console.log("Resources table created successfully!: ", response);  
    } catch (error) {
        console.log("Error creating table: ", error);
        pool.end(); 
    };
};

const seedResourcesTable = async () => {

    await createResourcesTable(); 

    resources.forEach((resource) => {

        const insertQuery = {
            text: `INSERT INTO resources (name, website, about, phone, location, image, date, time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        };

        const values = [
            resource.name,
            resource.website,
            resource.about,
            resource.phone,
            resource.location, 
            resource.image, 
            resource.date, 
            resource.time
        ];

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.log("Error inserting into table: ", error);
            } else {
                console.log(`✅ ${resource.name} added successfully`); 
            };
        })
    })
};

seedResourcesTable(); 