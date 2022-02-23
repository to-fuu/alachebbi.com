import React, { ReactElement, useRef, useState } from "react";

type SliderPropsType = {
    children: ReactElement[] | ReactElement,
    gap?: number,
    className?: string
}
export const Slider = ({ children, gap = 40, className }: SliderPropsType) => {
    const [selected, setSelected] = useState(0)
    const childrenRef = useRef<any>([]);
    return (<div
        className={`flex transition-all duration-300 overflow-x-visible ${className}`}
        style={{
            gap,
            transform: `translateX(-${(selected * childrenRef.current[selected]?.scrollWidth + gap * selected)}px)`
        }}
    >
        {React.Children.map(children, (child: ReactElement, index) =>
            React.cloneElement(child, {
                ref: (ref: any) => (childrenRef.current[index] = ref),
                onClick: () => {
                    if (selected !== index)
                        setSelected(index)
                },
                className: 'cursor-pointer transition-all duration-300 ' + (selected !== index && 'opacity-50 ')
            })
        )}

    </div>
    )
}