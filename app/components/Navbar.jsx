import { NavLink } from 'remix'

function Navbar() {
	let activeStyle = {
		textDecoration: 'underline',
	}
	return (
		<nav>
			<ul>
				<li>
					<NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
						Create
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/browse'
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Browse
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
