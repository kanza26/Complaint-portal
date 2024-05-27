
const db=require('./dbconnection.js')


async function register(req, res) {
    try {
        const { name, email, password, mobileno, profile } = req.body;
       
        // Check if the email already exists
        const existingEmail = await db.fetchData(email);
       
        if (existingEmail.length !== 0) {  //agar email hai to []
            return res.status(400).json({ error: "Email already exists" });
        } else {
            const user = await db.insertData(name, email, password, mobileno, profile);
            console.log(user)
            return res.status(200).json({ msg: "Successfully registered" });
        }       
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
    
        const existingEmail = await db.fetchData(email);
        
        if (existingEmail.length !== 0) {
            if (existingEmail[0].password === password) {
                console.log(existingEmail)
                
                return res.status(200).json({ msg: `Successful login` });
            } else {
                // Password does not match
                return res.status(400).json({ error: "Password does not match" });
            }
        } else {
            // User does not exist
            return res.status(400).json({ error: "User does not exist" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}



module.exports={register,login};