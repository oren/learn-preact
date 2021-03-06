import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Home from './home'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			/** Contains the user object */
			user: { jwt: '' }
		}
	}

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	componentWillMount() {
		// check localStorage for jwt (user logged-in)
		let jwt = localStorage.getItem('jwt')
		let registered = localStorage.getItem('registered')

		if (jwt) {
			// show success message if we just registered (not all the time)
			this.state.user.jwt = jwt
			return
		}

		this.state.user.jwt = ''
	}

	setUser = user => this.setState(user)

	render({}, { user }) {
		return (
			<div id="app">
				<Router>
					<Home path="/" />
				</Router>
			</div>
		)
	}
}
