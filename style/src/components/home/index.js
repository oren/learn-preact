import { h, Component } from 'preact'
import style from './style'
const classNames = require('classnames')

export default class Profile extends Component {
	render({user}) {
		const tmp = classNames({
      'foo': true,
      'bar': true,
    });

		return (
			<div>
				<div className={tmp}>
					test
				</div>
				<div className="foo bar">
					test
				</div>
				<div class={style.foo}>
					test
				</div>
			</div>
		)
	}
}
