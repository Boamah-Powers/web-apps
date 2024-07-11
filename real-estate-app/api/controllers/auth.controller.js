import bcrypt, { hash } from "bcrypt";
import prisma from "../lib/prisma.js";

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
        // console.log(hashedPassword)

        // create a new user and save to db
        const newUser = await prisma.user.create({
            data: {
                username, 
                email, 
                password: hashedPassword,
            },
        });

        // console.log(newUser);
        response.status(201).json({
            message: "User created successfully!"
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: "Failed to create user!"})
    }
    
}
export const login = async (request, response) => {
    try {
        if (
            !request.body.username ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: "Send all required fields: username, password"
            })
        }

        const { username, password } = request.body;

        // CHECK IF USER EXISTS
        const user = await prisma.user.findUnique({
            where:{username}
        })

        if (!user) {
            return response.status(401).send({message: "Invalid credentials!"});
        }

        // CHECK IF PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return response.status(401).send({message: "Invalid credentials!"});
        }

        // GENERATE COOKIE TOKEN AND SEND TO THE USER

         
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: "User login failed!"})
    }
}
export const logout = (request, response) => {
    // db operations
}