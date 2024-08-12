import prisma from "../lib/prisma.js";

export const addMessage = async (request, response) => {

    try {
        const tokenUserId = request.userId;
        const chatId = request.params.chatId;
        const text = request.body.text;

        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId],
                },
            },
        });

        if (!chat) {
            return response.status(404).json({ message: "Chat not found!" });
        }

        const message = await prisma.message.create({
            data: {
                text,
                chatId,
                userId: tokenUserId,
            }
        });

        await prisma.chat.update({
            where: {
                id: chatId,
            },
            data: {
                seenBy: [tokenUserId],
                lastMessage: text,
            }
        });

        response.status(200).json(message);

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to add message!"});
    }
};
