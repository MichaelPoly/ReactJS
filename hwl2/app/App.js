import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    render(){
        //JSX
        return <h1 onClick={()=>{let my = "1111"; alert(my);}}>Первое приложение на React!</h1>;
    }
}

ReactDOM.render(<App/>,
    document.getElementById('root'));