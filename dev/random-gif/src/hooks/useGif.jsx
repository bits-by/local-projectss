import {useEffect, useState} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
// const tadUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}` ;       
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
// const url = `api.giphy.com/v1/gifs/trending?api_key=${API_KEY}` ;


const useGif = (tag) => {

    const  [gif, setGif] = useState('')
    const [loader,setLoader] = useState('false');

    async function fetchData(tag) {
      setLoader(true);

      const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url );
      const imageSrc = data.data.images.downsized_large.url;
      setGif(imageSrc);
      setLoader(false)

    }
    useEffect( () =>{
      fetchData();
    },[])

return {gif, loader, fetchData}
}

export default useGif;