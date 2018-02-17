import React from 'react';
import CheckList from './KanbanCheckList';

export default class KanbanCard extends React.Component
{
    render(){
        return (
            <div className="card">
                <div className="cart__title">{this.props.title}</div>
                <div className="card_details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        );
    }
}