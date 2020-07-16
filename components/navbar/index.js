import { Nav, NavItem, NavLink } from 'reactstrap';
import fetcher from '../../helpers/fetcher';
import useSWR from 'swr'

const Navbar = () => {

  const { data, error } = useSWR('/api/getCategories', fetcher);

  return (
    <div className='navbar-container'>
      <Nav vertical>
        {
          data && data.map((item) => (
            <NavItem key={item.id}>
              <NavLink href={`/category/${item.id}`}>{item.name}</NavLink>
            </NavItem>
          ))
        }
      </Nav>

      <style jsx>{`
        .navbar-container {
          width: 200px;
          background-color: #ebeae8;
        }
      `}</style>
    </div>
  );
}

export default Navbar;