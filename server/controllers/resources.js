import { pool } from "../config/database.js"; 

const fetchResources = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM resources ORDER BY ID ASC"); 
        res.status(200).json(results.rows);  
    } catch (err) {
        res.status(409).json({ error: err.message });
    };
};

const fetchResourceById = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM resources WHERE id = $1", [req.params.id]);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    };
};

export default {
    fetchResources, 
    fetchResourceById, 
};
