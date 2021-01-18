import React from 'react'


function GifList({allGifs}) {



    return ( 
        <div>
            <ul>
                <li><img src={allGifs[0]}></img></li>
                <li><img src={allGifs[1]}></img></li>
                <li><img src={allGifs[2]}></img></li>
            </ul>

        </div>

    )
}

export default GifList