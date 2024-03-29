import React from 'react';

class SearBar extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            term: ''
        };
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };
   
    render() { 
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            // one way of implementing an event handler
                            onChange={e => this.setState({term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
          );
    }
} 
 
export default SearBar;