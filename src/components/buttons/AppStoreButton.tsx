import clsxm from '@/lib/clsxm';
import { AiFillApple } from 'react-icons/ai';

const AppStoreButton: React.FC<{ url: string, comingSoon?: boolean, accent?: string }> = ({ url, comingSoon, accent }) => {
  return <a href={comingSoon ? '' : url} rel='noreferrer noopener' target={'_blank'} className={clsxm('relative overflow-hidden inline-flex items-center justify-center flex-1 h-16 gap-4 text-xl font-medium transition-all duration-300 shadow group active:scale-95 rounded-2xl dark:bg-gray-900 bg-gray-50/75 px-7 hover:bg-gray-50 dark:hover:bg-gray-900/95', comingSoon ? 'pointer-events-none select-none' : 'border-t')}>
    <AiFillApple className="relative text-5xl" />
    <div className="relative text-left">
      <div className="text-xs">Download on the</div>
      <div className="text-lg font-medium">App Store</div>
    </div>

    {comingSoon &&
      <span style={{ color: 'black' }} className="absolute inset-0 grid place-items-center bg-white/50  backdrop-blur-sm rounded-2xl ">
        Coming Soon
      </span>
    }
  </a>

}



export { AppStoreButton };