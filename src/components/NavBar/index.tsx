import type { NavLinkProps } from 'react-router-dom';
import NavItem from '../NavItem';
import HomeIcon from '../Icons/HomeIcon';
import AboutIcon from '../Icons/AboutIcon';
import WorkIcon from '../Icons/WorkIcon';
import SkillsIcon from '../Icons/SkillsIcon';
import Logo from '../Logo';
type Props = {};

type Routes = {
  name: string;
  path: string;
  label: string;
  icon: React.ReactNode;
  props?: Partial<NavLinkProps>;
};

const routes: Routes[] = [
  {
    name: 'home',
    path: '/',
    label: 'Home',
    icon: <HomeIcon />,
    props: { end: true }
  },
  { name: 'skills', path: '/skills', label: 'Skills', icon: <SkillsIcon /> },
  { name: 'work', path: '/work', label: 'Work', icon: <WorkIcon /> },
  { name: 'about', path: '/about', label: 'About', icon: <AboutIcon /> }
];

function NavBar({}: Props) {
  return (
    <nav className='navbar'>
      <Logo />
      <div className='navlist'>
        {routes.map((route) => (
          <NavItem
            className='navitem'
            key={route.name}
            to={route.path}
            {...route.props}
          >
            <div className='navitem-icon'>{route.icon}</div>
            <div className='navitem-label'>{route.label}</div>
          </NavItem>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
