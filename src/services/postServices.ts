import axios from "axios";

export type TPost = {
    id: number;
    header: string;
    description: string;
    createDate?: string;
    userId: number;
    userName?: string;
}

export const getPostsByUserId = async () => {
    try {
        const res = await axios.get(`https://localhost:7050/api/Posts/byUserId/${localStorage.getItem('userId')}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getAllPosts = async () => {
    try {
        const res = await axios.get('https://localhost:7050/api/Posts');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPostsByPostId = async () => {
    try {
        const res = await axios.get(`https://localhost:7050/api/Posts/${localStorage.getItem('postId')}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = async (post:TPost,id:number) => {
    try {
        console.log(id);
        await axios.put(
            `https://localhost:7050/api/Posts/${id}`,
            post,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );
    } catch (error) {
        console.log(error);
    }
};
