 
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
        [React.createElement( 'h1', {},'Hello World'
        
    
        ),],
               )
           )
       }
ReactDOM.render(
    React.createElement(App), 
    document.getElementById('root')
)