import axios from "axios";

export type TComment = {
    id: number;
    zComment: string;
    userId: number;
    postId: number;
    userName: string;
}

export const addComment = async (comment:TComment) => {
    try {
        await axios.post('https://localhost:7050/api/Comment/byUserAndPostId', { ...comment })
        return getComments();
        } catch (err: any) {
        console.log(err);
    }
}

export const getComments = async () => {
    try {
        if (localStorage.getItem('postId')) {
            const res = await axios.get(
                `https://localhost:7050/api/Comment/byPostId/${localStorage.getItem('postId')}`);
            return res.data;
        }
    } catch (error) {
        console.log(error);
    }
};