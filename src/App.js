import logo from './logo.svg';
import './App.css';
import Player from './Player';

function App() {
  return (
    <Player url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" 
      width={"100%"}
      height={"100%"}
      metadata={{
        title: "Understading the new coding guidelines",
        subtitle: "How to refactor pre-existing code"
      }}
      theme={{
        bgColor: "#000000",
        textColor: "#ffffff",
        topBarHeight: "50px",
        bottomBarHeight: "75px"
      }}/>
  );
}

export default App;
