import React from 'react';

export default class Footer extends React.Component
{
    render()
    {
        return (
            <footer>
                <div className="container">
                    <p>{this.props.children}</p>
                </div>
            </footer>
        );
    }
}
