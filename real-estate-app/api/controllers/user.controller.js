import prisma from "../lib/prisma.js";
import bcrypt, { hash } from "bcrypt";

export const getUsers = async (request, response) => {

    try {
        
        const users = await prisma.user.findMany();
        response.status(200).json(users);

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get users!"});
    }
};

export const getUser = async (request, response) => {
    try {
        if (!request.params.id) {
            return response.status(400).json({message: "Missing ID!"});
        }

        const id = request.params.id;

        const user = await prisma.user.findUnique({
            where: { id },
        });
        response.status(200).json(user);
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get user!"});
    }
};

export const updateUser = async (request, response) => {
    try {
        if (!request.params.id) {
            return response.status(400).json({message: "Missing ID!"});
        }

        const id = request.params.id;
        const tokenUserId = request.userId;
        const {password, avatar, ...inputs} = request.body;
        let updatedPassword = null;

        if (id !== tokenUserId) {
            return response.status(403).json({message: "Not authorized!"});
        }

        if (password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword}),
                ...(avatar && { avatar}),
            },
        });

        const {password: userPassword, ...info} = updatedUser;
        response.status(200).json(info);
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get users!"});
    }
};

export const deleteUser = async (request, response) => {
    try {
        if (!request.params.id) {
            return response.status(400).json({message: "Missing ID!"});
        }

        const id = request.params.id;
        const tokenUserId = request.userId;

        if (id !== tokenUserId) {
            return response.status(403).json({message: "Not authorized!"});
        }

        await prisma.user.delete({
            where: { id },
        });

        response.status(200).json({message: "User deleted!"});
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get users!"});
    }
};