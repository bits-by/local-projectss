import React  from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const  [gif, setGif] = useState('')
    // const [loadering,setLoadering] = useState('false');

    // async function fetchData() {
    //   setLoadering(true)
    //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
    //   const {data} = await axios.get(url);
    //   const imageSrc = data.data.images.downsized_large.url;
    //   setGif(imageSrc);
    //   setLoadering(false)

    // }
    // useEffect( () =>{
    //   fetchData();
    // },[])

    const {gif,loadering, fetchData} = useGif();


  return (
    <div className="w-1/2  bg-green-400 rounded-lg border border-black flex flex-col items-center gay-y-5 mt-[15px]">                 
        <h3 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h3>

        
        {
          loadering ? (<Spinner /> ) :( <img src={gif} width="450" alt="gif"/>)
        }

        <button onClick={ () =>fetchData()}
         className="w-9/12 mt-[15px] mb-[20px] bg-green-100 opacity-70 text-lg p-y-5 rounded-lg">Genrate</button>
    </div>
  )
}

export default Random