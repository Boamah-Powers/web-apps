import bcrypt, { hash } from "bcrypt";

export const register = async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: "Send all required fields: username, email, password"
            });
        }

        const { username, email, password } = request.body;

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)

        // create a new user and save to db
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
    
}
export const login = (request, response) => {
    // db operations
}
export const logout = (request, response) => {
    // db operations
}