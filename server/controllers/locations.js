import { pool } from "../config/database.js";

const fetchLocations = async (req, res) => {
    try {
        const results = await pool.query("SELECT location FROM resources ORDER BY ID ASC"); 
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    };
};

const fetchResourcesByLocation = async (req, res) => {
    try {
        console.log(req.params.location);
        const results = await pool.query('SELECT * FROM resources WHERE location = $1', [req.params.location]);
        res.status(200).json(results.rows);
    } catch (err) {
        res.status(409).json({ error: err.message });
    };
};

export default {
    fetchLocations, 
    fetchResourcesByLocation
};