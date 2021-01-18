import React, {useState} from 'react'


function GifSearch({fetchGIF}) {


    const [search, setSearch] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        fetchGIF(search)
       
    }



    function handleChange(e){
        setSearch(e.target.value)
    }


    return( 
       <div>
           <form
            onSubmit={handleSubmit}>
               <input
                type="text"
                value={search}
                onChange={handleChange}
                >
               </input>
               <button type="submit">Submit</button>
           </form>
       </div>
    )
}

export default GifSearch