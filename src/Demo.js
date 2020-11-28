import logo from './logo.svg';
import './Player.css';
import Player from './Player';

function Demo() {
  return (
    <Player url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4" 
      width={"100%"}
      height={"100%"}
      playing={true}
      metadata={{
        title: "Understading the new coding guidelines",
        subtitle: "How to refactor pre-existing code"
      }}
      theme={{
        bgColor: "#000000",
        textColor: "#ffffff",
        topBarHeight: "70px",
        bottomBarHeight: "50px",
        highlightColor: "#ff0000"
      }}/>
  );
}

export default Demo;
