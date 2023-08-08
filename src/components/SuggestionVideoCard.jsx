import { formatCount,randomViewsCount } from '../utils/helper'

const SuggestionVideoCard = ({info}) => {
  // const [views, setViews] = useState(0);
  // useEffect(() => {
  //   setViews(formatCount(randomViewsCount()))
  // }, [])
  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-1'>
            <img className="rounded-3xl h-full w-full p-1 " alt='tumbnail' src={info?.snippet?.thumbnails?.medium?.url} />
        </div>
        <div>
            <ul>
                <li className='font-bold'>{info?.snippet?.title}</li>
                <li>{info?.snippet?.channelTitle}</li>
                <li>{formatCount(randomViewsCount())} views</li>
            </ul>
        </div>
    </div>
  )
}

export default SuggestionVideoCard
