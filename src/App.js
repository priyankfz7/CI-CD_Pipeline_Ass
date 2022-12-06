import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SingleProject from './singleProject';

async function getdata(lan) {
  let res = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${lan}`);
  let data = await res.json();

  return data
}

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  console.log(data);

  const handleClick = async (lan) => {
    setLoading(true);
    getdata(lan).then((res) => setData(res.items)).then((res) => setLoading(false));



  }
  useEffect(() => {
    handleClick("all");
  }, [])

  return (
    <div className="App">
      <div style={{ padding: "30px" }}>
        <button onClick={() => handleClick("all")} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "red", color: "white", fontSize: "15px", marginRight: "30px" }}>All</button>
        <button onClick={() => handleClick("html")} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "teal", color: "white", fontSize: "15px", marginRight: "30px" }}>HTML</button>

        <button onClick={() => handleClick("css")} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "teal", color: "white", fontSize: "15px", marginRight: "30px" }}>CSS</button>

        <button onClick={() => handleClick("js")} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "teal", color: "white", fontSize: "15px", marginRight: "30px" }}>JAVA SCRIPT</button>



      </div>
      {loading ? <div align="center">
        <img width="500px" src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" />
      </div> : <div style={{ display: "grid", textAlign: "center", width: "75%", margin: "auto", gap: "40px", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {data.map((p) => <SingleProject key={p.id} reponame={p.name} starc={p.stargazers_count} forkc={p.forks_count} lan={p.language} link={p.clone_url} image={p.owner.avatar_url} />)}
      </div>}
    </div>
  );
}

export default App;
