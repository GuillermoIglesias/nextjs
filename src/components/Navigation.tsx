import Link from 'next/link';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Posts',
    route: '/posts',
  },
  {
    label: 'About',
    route: '/about',
  },
];

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
