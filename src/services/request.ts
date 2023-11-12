import { api } from "./api"

export const getItems = async () => {
    try {
        const { data } = await api.get('/items')
        return data
    } catch (error) {
        return error
    }
}