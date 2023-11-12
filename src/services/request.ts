import { api } from "./api"

export const getItems = async () => {
    try {
        const { data } = await api.get('/items')
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}