import { BASE_URL } from "./index";

const userService = {
    //GET
    getAllUsers : async () => {
        const response = await fetch(`${BASE_URL}/clients`);
        const data = await response.json();
        return data.results || [];
    },
    //POST
    updateUser: async (id, data) => {},
    //DELETE
    deleteUser: async (id) => {},
    //POST
    createUser: async (data) => {},
}

export const {
    getAllUsers,
    updateUser,
    deleteUser,
    createUser
} = userService