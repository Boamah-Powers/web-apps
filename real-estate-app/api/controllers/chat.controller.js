import prisma from "../lib/prisma.js";

export const getChats = async (request, response) => {

    try {
        const tokenUserId = request.userId;

        const chats = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        });

        for (const chat of chats) {
            const receiverId = chat.userIDs.find(id => id !== tokenUserId);
            const receiver = await prisma.user.findUnique({
                where: {
                    id: receiverId,
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true,
                }
            });

            chat.receiver = receiver;
        }

        response.status(200).json(chats);

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get chats!"});
    }
};

export const getChat = async (request, response) => {
    try {
        const tokenUserId = request.userId;
        const chat = await prisma.chat.findFirst({
            where: {
                id: request.params.id,
                userIDs: {
                    hasSome: [tokenUserId],
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc",
                    }
                }
            }
        });

        if (!chat) {
            return response.status(404).json({ message: "Chat not found!" });
        }

        await prisma.chat.update({
            where: {
                id: request.params.id
            },
            data: {
                seenBy: {
                    set: Array.from(new Set([...chat.seenBy, tokenUserId])),
                }
            }
        });

        response.status(200).json(chat);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Failed to get chat!" });
    }
};


export const addChat = async (request, response) => {

    try {
        const tokenUserId = request.userId;

        const newChat = await prisma.chat.create({
            data: {
                userIDs: [tokenUserId, request.body.receiverId]
            }
        })
        response.status(200).json(newChat);

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to add chat!"});
    }
};

export const readChat = async (request, response) => {

    try {
        const tokenUserId = request.userId;

        const chat = await prisma.chat.update({
            where: {
                id: request.params.id,
                userIDs: {
                    hasSome: [tokenUserId],
                },
            },
            data: {
                seenBy: {
                    set: Array.from(new Set([...chat.seenBy, tokenUserId])),
                }
            }
        });
        response.status(200).json(chat);

    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to read chat!"});
    }
};
