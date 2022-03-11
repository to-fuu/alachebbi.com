import { ReactNode, useEffect, useRef, useState } from 'react';
import { HiPlus } from 'react-icons/hi';

type DetailsPropsType = {
  children?: ReactNode;
  startOpen?: boolean;
  title: string;
  content: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
};

const Details = ({
  children,
  startOpen,
  title,
  content,
  isOpen,
  onOpen,
}: DetailsPropsType) => {
  const [open, setOpen] = useState(startOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (open && onOpen) {
      onOpen();
    }
  }, [open]);

  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div className='w-full overflow-clip rounded-2xl bg-gray-100 dark:bg-black dark:text-white'>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className='flex w-full items-center gap-4 px-6 py-4 text-2xl font-medium duration-300  hover:bg-gray-200 dark:hover:bg-gray-900'
      >
        <div className='relative h-6 w-6 scale-[0.6] '>
          <div className={`absolute top-3 h-0.5 w-full -translate-y-px bg-current transition-all duration-300 ${open && '-rotate-180'}`}
          ></div>
          <div className={`absolute top-0 left-3 h-full w-0.5 -translate-x-px bg-current transition-all duration-300  ${open && '-rotate-90'}`}
          ></div>
        </div>
        {title}
      </button>

      <div
        ref={contentRef}
        className={`overflow-clip transition-all duration-300`}
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p className='px-6 pt-4 pb-6 dark:text-white'>{content}</p>
      </div>
    </div>
  );
};

export default Details;
