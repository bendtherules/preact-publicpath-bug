import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/frame/">Home</Link>
			<Link activeClassName={style.active} href="/frame/profile">Me</Link>
			<Link activeClassName={style.active} href="/frame/profile/john">John</Link>
		</nav>
	</header>
);

export default Header;
