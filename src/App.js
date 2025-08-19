import React from 'react';
import './App.css';

// class FilmItemRow extends React.Component{
//   render(){
//     return(
//       <li>
//         <a href={this.props.url}>
//             {this.props.url}
//         </a>
//       </li>
//     )
//   }
// }

class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      characterReload: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
      
    }
  }
  numGen(){
    // return Math.floor(Math.random() * 730);
    const num = Math.floor(Math.random() * 730);
    return num;
  }

  getNewCharacter(){

    const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.numGen()}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        name: data.name,
        slug: data.slug,
        GroupAfiliations: data.connections.groupAffiliation,
        Image: data.images.sm,
        characterReload: true,
    })
    })

   
  }
  render(){

    // const movies = this.state.films.map((url, i) =>{
    //   return <FilmItemRow key={i} url={url} />
    // })

    return(
      <div>
        {
          this.state.characterReload && 
          <div>
              <img
              className='heroImg'
                src= {this.state.Image}
                alt = {this.state.name}
              />
            <h2>{this.state.name}</h2>
             <p>Slug: {this.state.slug}</p>
             <p> Association: {this.state.GroupAfiliations}</p>
             
          </div>
        }

          <button 
         type='button'
         className='btn'
         onClick={() => this.getNewCharacter()}
          >
           Randomize Heroes
           </button>
      </div>

    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
