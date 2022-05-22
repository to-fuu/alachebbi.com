import clsxm from '@/lib/clsxm';
import { FaGithub } from 'react-icons/fa';

const GithubButton: React.FC<{ url: string, private?: boolean; comingSoon?: boolean, accent?: string }> = ({ url, comingSoon, accent, private: isPrivate }) => {
  return <a href={comingSoon ? '' : url} style={{ color: accent || 'black' }} rel='noreferrer noopener' target={'_blank'} className={clsxm('relative overflow-hidden inline-flex items-center  flex-1 h-16 gap-4 text-xl font-medium transition-all duration-300 shadow group active:scale-95 rounded-2xl dark:bg-gray-900 bg-gray-50/75 px-7 hover:bg-gray-50 dark:hover:bg-gray-900/95 ', comingSoon ? 'pointer-events-none select-none' : 'border-t', isPrivate && 'opacity-50 pointer-events-none')}>
    <FaGithub className="relative text-3xl" />
    {isPrivate ?

      <span className=''>Private 😢 </span>
      :
      <span className="relative text-left flex flex-col">
        <span className="text-xs">Fork project on</span>
        <span className="text-lg font-medium">Github</span>
      </span>
    }
  </a>

}



export { GithubButton };
