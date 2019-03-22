import React, {Component} from 'react';
import './card.scss';

class Card extends Component {
    
	render(){
		return (
			<div className="card__container">
				<div className="card__title">{this.props.post.title}</div>
				<div className="card__body">{this.props.post.body}</div>
			</div>
		)
	}
}


export default Card