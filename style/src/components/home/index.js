import { h, Component } from 'preact'
import style from './style'
const classNames = require('classnames')

export default class Profile extends Component {
	render({user}) {
		const tmp = classNames(
      style.foo,
      style.bar
    )
		console.log(tmp)

		return (
			<div>
				<div class={tmp}>
					test
				</div>

				<div class={classNames({
					[style.foo]: true,
					[style.bar]: true
				})} >
					foo
				</div>

				<div class={classNames(
					style.foo,
					style.bar
				)} >
					foo
				</div>

				<div class={classNames({
						[style.foo]: true,
						[style.bar]: true,
				})} >
					test
				</div>
			</div>
		)
	}
}
