import React, { ReactNode, useState } from "react"
import Details from '@/components/details'

export type DetailsType = {
    title: string,
    content?: ReactNode
}

type DetailsGroupProps = {
    items: DetailsType[]
    defaultOpen?: number
}

export const DetailsGroup = ({ items, defaultOpen }: DetailsGroupProps) => {
    const [openIndex, setOpenIndex] = useState<number>(defaultOpen || -1)
    return <>
        {
            items.map(({ title, content }, index) => (
                <Details key={`item_${index}`} onOpen={() => {
                    setOpenIndex(index)
                }} title={title} content={content} isOpen={openIndex == index} />
            ))
        }
    </>

}