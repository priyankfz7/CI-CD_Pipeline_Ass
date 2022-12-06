import React from 'react'

const SingleProject = ({reponame,starc,forkc,lan,link,image}) => {
   
  return (
    <div  style={{border:"1px solid teal",padding:"15px",borderRadius:"7px"}}>
        <div>
            <img alt="mycompany"width="100%" src={image}/>
        </div>
        <a href={link}><h3>{reponame}</h3></a>
        <h3>{lan}</h3>
    
        <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>forks: <span style={{color:"red"}}>{forkc}</span></div>
                <div>stars: <span style={{color:"teal"}}>{starc}</span></div>
        </div>
    </div>
  )
}

export default SingleProject