import { Nav, NavItem, NavLink } from 'reactstrap';
import fetcher from '../../helpers/fetcher';
import useSWR from 'swr'

const Navbar = () => {

  const { data, error } = useSWR('/api/getCategories', fetcher);

  console.log(data)

  return (
    <div>
      <Nav vertical>
        {
          data && data.map((item) => (
            <NavItem key={item.id}>
              <NavLink href={`/category/${item.id}`}>{item.name}</NavLink>
            </NavItem>
          ))
        }
      </Nav>
    </div>
  );
}

export default Navbar;