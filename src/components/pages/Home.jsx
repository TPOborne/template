const Home = ({ nextHandler }) => {
  return (
    <div className="homeWrapper">
      <div className="home">
        <h1>Game Name</h1>
        <h2>How to play</h2>
        <p>Blah blah blah</p>
        <ul>
          <li>Do this</li>
          <li>And also do this</li>
        </ul>
        <p>And thats it</p>
        <button onClick={nextHandler}>Play</button>
      </div>
    </div> 
  )
};

export default Home;