import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [
				{
					volumeInfo: {
						title: 'Loading Book Titles'
					}
				}
			]
		}
	}

	componentWillMount() {
		const url = `https://www.googleapis.com/books/v1/volumes?q=the+old+man+and+the+sea`
		const request = axios.get(url)

		request.then(({data}) => {
			this.setState({
				books: data.items
			})
		})
	}

	render() {
		return(
			<div>
				{
          this.state.books.map( (book, i) => (
            <div key={i}>
              <p>{ book.volumeInfo.title }</p>
            </div>
          ))
         }
			</div>
		)
	}

}