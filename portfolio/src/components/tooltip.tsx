import { ReactNode } from "react";

type props = {
    children: ReactNode
    content: string
    direction?: 'top' | 'left' | 'right' | 'bottom'
}
export default function Tooltip({ children, content }: props) {
    return <span className="relative group">
        {children}
        <span className={`group-hover:scale-100 scale-75 text-base duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1   pointer-events-none bg-gray-900 whitespace-nowrap absolute -top-full rounded-md text-white px-1 left-1/2 -translate-x-1/2
        after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0 after:border-4 after:border-transparent after:border-b-0 after:-ml-1 after:-mb-1 after:border-t-gray-900
        `}>
            {content}
        </span>
    </span>
}