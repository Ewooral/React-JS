 
 const Pet = () =>{
     return React.createElement(
         'div', {}, [
         React.createElement( 'h2', {}, 'Elijah'),
         React.createElement( 'h3', {}, 'Short'),
         React.createElement( 'h3', {}, 'Bad teeth'),
         ]
     )
 }

const App = () => {
      return  React.createElement(
               'div',
               null,
               [
                React.createElement("h1", {}, 'My first React app'),
                React.createElement(Pet),
                React.createElement(Pet),
                React.createElement(Pet),
               ]
       
           )
       }
ReactDOM.render(
    React.createElement(App), 
    document.getElementById('root')
)