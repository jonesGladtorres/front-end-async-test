import { getItems } from "@/services/request"
import { Card } from "./Card"

export const CardList = async () => {
    const data = await getItems()

    return (
        <>
            {data.map((item: { id: number; description: {}; title: {} }) => <Card key={item.id} description={item.description} title={item.title}/>)}
        </>
    )
}