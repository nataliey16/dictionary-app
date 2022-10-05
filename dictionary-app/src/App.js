import "./App.css";

function App() {
  return (
    <div className="App container">
      <header className="App-header">Dictionary</header>
      <form className="App-search">
        <div className="row">
          <input
            className="col-sm-8 form-control w-75"
            type="search"
            placeholder="Enter a word"
          ></input>
          <input
            className="btn btn-primary col-sm-4 w-25 "
            type="submit"
            value="Search"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default App;
