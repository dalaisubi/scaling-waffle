import React, {Component} from 'react';
import Card from './card';
import "./style/post_card.scss"

class PostCard extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false,
	      items: []
	    };
  	}

  	componentDidMount() {
	    fetch("http://jsonplaceholder.typicode.com/posts")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result
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

	render(){
		return (
			<div className="postcard__wrapper">
			    {this.state.items.length > 0 ?
			    	this.state.items.map((data, i) => 
				    	<div className="postcard__container" key={i}>
							<Card post={data} />
						</div>
					)
					: ""
			    }
				
			</div>
			)
	}

}

export default PostCard