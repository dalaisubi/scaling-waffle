import React, {Component} from 'react';

import './style/comment.scss';

class Comment extends Component {

	render(){
		return (
			<div className="comment__container">
				{
					this.props.comments != undefined?
					<span>
						<div className="comment__name"> {this.props.comments.name} :</div>
						<div className="comment__body"> {this.props.comments.body} </div>						
					</span>
					: ""
				}				
			</div>
		)
	}
}


export default Comment