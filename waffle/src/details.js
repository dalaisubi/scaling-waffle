import React, {Component} from 'react';

import './style/details.scss';

import avatar from './avatar-male.jpg';

class Details extends Component {
	constructor() {
		super();
	}

	componentDidMount(){

	}

	render(){
		console.log(this.props.post)
		return (
			<div className="details__wrapper">
				<div className="details__user">
					<img src={avatar} className="details__avatar" />
					<h1 className="details__username"> User Name </h1>
				</div>
				<div className="details__post">
					<div className="details__title"> {this.props.post.title} </div>
					<div className="details__body"> {this.props.post.body} </div>
				</div>


			</div>

		)
	}
}


export default Details