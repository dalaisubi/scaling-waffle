import React, {Component} from 'react';

import './style/details.scss';
import avatar from './avatar-male.jpg';

import Comment from './comment';

class Details extends Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false,
			userDetails: null,
			comments: []
		}
	}

	componentDidMount(){
		if(this.props.post != undefined && this.props.post.userId !=null){
			fetch("http://jsonplaceholder.typicode.com/users/"+this.props.post.userId)
		      .then(res => res.json())
		      .then(
		        (result) => {
		          this.setState({
		            userDetails: result
		          });
		        },
		        (error) => {
		          this.setState({
		            error
		          });
		        }
		      )
		}
		if(this.props.post != undefined && this.props.post.id !=null){
			fetch("http://jsonplaceholder.typicode.com/comments?postId="+this.props.post.id)
		      .then(res => res.json())
		      .then(
		        (result) => {
		          this.setState({
		            isLoaded: true,
		            comments: result
		          });
		        },
		        (error) => {
		          this.setState({
		            isLoaded: true,
		            error
		          });
		        }
		      )
		}
		
	}

	render(){
		return (
			<div className="details__wrapper">
				<div className="details__user">
					<img src={avatar} className="details__avatar" />
					<h1 className="details__username"> {this.state.userDetails != null? this.state.userDetails.name: "Unknown"} </h1>
					<div className="details__close" onClick={this.props.close_btn}></div>
				</div>
				<div className="details__post">
					<div className="details__title"> {this.props.post.title} </div>
					<div className="details__body"> {this.props.post.body} </div>
				</div>
				<div className="details__comments">
					{
						this.state.comments.length > 0? 
							this.state.comments.map((items, i)=>
								<Comment key={i} comments={items} />
							)
							: <h3>No comment added for this post</h3>
					}
				</div>

			</div>

		)
	}
}


export default Details