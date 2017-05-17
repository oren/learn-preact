import { h, Component } from 'preact'
import style from './style'
const classNames = require('classnames')

export default class Profile extends Component {
	render({user}) {
		const tmp = classNames({
      'home': true,
      'baz': true,
    });

		return (
			<div className={tmp}>
				test
			</div>
		)
	}
}
