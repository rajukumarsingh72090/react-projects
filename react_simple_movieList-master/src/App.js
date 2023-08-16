
import './App.css';
import Header from './components/header';
import Movie from './components/movie';
import Movies from './components/movie.json'
function App() {
  let login = false
  // if(login === false){
  //   return <h1>mai nhi dikaunga</h1>
  // }


  return (
    <div className="App">
      {/* ternary operator
      {
        login === false? <h1>sun bey</h1>: <h1>chal mat sun</h1>
      } */}

{/* {
    (()=>{
      if (login == true) {
        return <h1>dekh le bhai</h1>
      }else{
        return <h1>bilkul bhi nhi dekhna hai </h1>
      }
    })()
  } */}
      <Header/>
      <div className='main'>
        {
          Movies.map((element, index) => {
            return(
            <Movie 
            key={index}
            Title={element.Title}
            Year={element.Year}
            img={element.Poster}
            />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

