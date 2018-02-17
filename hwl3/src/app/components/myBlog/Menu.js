import React from 'react';

export default class Menu extends React.Component
{
  render(){
    let itemsRender = [];
    for (let i = 0; i < this.props.items.length; i++) {
      itemsRender.push(<div key={i} className="menuBtn" id={this.props.items[i].id}><p>{this.props.items[i].name}</p></div>);
    }

    return <div className="menu">{itemsRender}</div>;
  }
}
