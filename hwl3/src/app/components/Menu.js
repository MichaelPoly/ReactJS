import React from 'react';

export default class Menu extends React.Component
{
    render(){
        console.log(this.props);

        let itemsRender = [];
        for (let i = 0; i < this.props.items.length; i++)
        {
            itemsRender.push(<li key={i}><a href={this.props.items[i].href}>{this.props.items[i].name}</a></li>);
        }

        return <div>
            <h1>{this.props.myTitle}</h1>
            <ul className="my_menu my_menu2">
                {itemsRender}
            </ul>
            <p>{this.props.children}</p>
        </div>
    }
}