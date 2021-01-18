import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";




function GifListContainer(){
    const [allGifs, setAllGifs] = useState([])

    useEffect(() => {
      searchGif()
    },[])

    function searchGif(searchValue="dolphin") {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=pMvUYxG1sIqw2yXDj5yCo3HEKtFdzw8f&rating=g`)
        .then(resp => resp.json())
        .then(data => setAllGifs(data))
    }

    if (allGifs['data']) {
    const gifList = [(allGifs['data'][0].images.original.url),(allGifs['data'][1].images.original.url),(allGifs['data'][2].images.original.url)]
    setAllGifs(gifList)
    // console.log(gifList)



    // function fetchGIF() {

    // }


}

    return( 
        <div>
            <GifList allGifs = {allGifs}/>
            <GifSearch fetchGIF = {searchGif}/>
        </div>
    )


}

export default GifListContainer;
