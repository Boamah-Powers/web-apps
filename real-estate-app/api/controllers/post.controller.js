import prisma from "../lib/prisma.js"

export const getPosts = async (request, response) => {
    try {
        const posts = await prisma.post.findMany();
        
        response.status(200).json(posts);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get posts!"});
    }
}

export const getPost = async (request, response) => {
    try {
        if (!request.params.id) {
            return response.status(400).json({message: "Missing ID!"});
        }
        const id = request.params.id;

        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    }
                },
            }
        });

        response.status(200).json(post);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get posts!"});
    }
}

export const addPost = async (request, response) => {
    try {
        if (!request.body) {
            return response.status(400).json({message: "Invalid request"});
        }

        const body = request.body;
        const tokenUserId = request.userId;

        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail,
                }
            }
        })

        response.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get posts!"});
    }
}

export const updatePost = async (request, response) => {
    try {

        response.status(200).json();
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get posts!"});
    }
}

export const deletePost = async (request, response) => {
    try {
        if (!request.params.id) {
            return response.status(400).json({message: "Missing ID!"});
        }
        const id = request.params.id;
        const tokenUserId = request.userId;

        const post = await prisma.post.findUnique({
            where: { id }
        })

        if (post.userId !== tokenUserId) {
            return response.status(403).json({message: "Not authorized!"});
        }

        await prisma.post.delete({
            where: { id }
        })
        response.status(200).json({message: "Post deleted"});
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "Failed to get posts!"});
    }
}