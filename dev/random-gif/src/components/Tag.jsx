import React ,{useState} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    const [tag,setTag] = useState('')
    // const  [gif, setGif] = useState('')
    // const [loadering,setLoadering] = useState('false');

    // async function fetchData() {
    //   setLoadering(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;
    //   const {data} = await axios.get(url);
    //   const imageSrc = data.data.images.downsized_large.url;
    //   setGif(imageSrc);
    //   setLoadering(false)

    // }
    // useEffect( () =>{
    //   fetchData();
    // },[])

    const {gif,loadering, fetchData} = useGif(tag);

    function clickHandler() {
      fetchData();
    }
  return (
    <div className="w-1/2  bg-blue-400 rounded-lg border border-black flex flex-col items-center gay-y-5 mt-[15px]">                 
        <h3 className="mt-[15px] text-2xl underline uppercase font-bold">  Random {tag} Gif</h3>

        
        {
          loadering ? (<Spinner /> ) :( <img src={gif} width="450" alt="gif"/>)
        }

        <input  
        className=" w-9/12 mb-[2px] mt-[30px] opacity-70 text-lg p-y-5 rounded-lg text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
        />
        <button className="w-9/12 mt-[15px] mb-[20px] bg-green-100 opacity-70 text-lg p-y-5 rounded-lg" onClick={clickHandler}>Genrate</button>
    </div>
  )
}

export default Tag