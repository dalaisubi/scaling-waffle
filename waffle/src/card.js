import React, {Component} from 'react';
import Modal from 'react-modal';


import './style/card.scss';
import Details from './details';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overlfow			  : 'scroll',
    height                : '90vh'
  }
};


class Card extends Component {
	constructor() {
		super();

		this.state = {
		  modalIsOpen: false
		};

		this.openModal = this.openModal.bind(this);
		this.afterOpenModal = this.afterOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	afterOpenModal() {
		// references are now sync'd and can be accessed.
		this.subtitle.style.color = '#f00';
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}
    
	render(){
		return (
			<div className="card__wrapper" >
				<div className="card__container">
					<div className="card__title">{this.props.post.title}</div>
					<div className="card__body">{this.props.post.body}</div>
					<div className="card__bottombar">
						<div className="card__see--comments" onClick={this.openModal}>see comments</div>
					</div>
					<div>
						<Modal
					          isOpen={this.state.modalIsOpen}
					          onAfterOpen={this.afterOpenModal}
					          onRequestClose={this.closeModal}
					          style={customStyles}
					          contentLabel="Comments"
					        >
					          <h2 ref={subtitle => this.subtitle = subtitle}></h2>
					          {/*<button onClick={this.closeModal}>close</button>*/}
					          <Details post={this.props.post} close_btn={this.closeModal} />
					          
					        </Modal>
					</div>
				</div>
				
			</div>
		)
	}
}



export default Card