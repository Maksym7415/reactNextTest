import NavBar from '../navbar';

const MainPage = (props) => 
  <div className='app-container'>
    <header className='header'>
      Some Logo
    </header>
    <div className='nav-menu-container'>
      <NavBar />
      <div className='content-container'>
        {props.children}
      </div>
    </div>

  <style jsx>{`
    .app-container {
      display: flex;
      flex-direction: column;
    }
    .header {
      width: 100%;
      height: 50px;
      background-color: #d9d6d0;
      padding: 0 10px;
      display: flex;
      align-items: center;
    }
    .nav-menu-container {
      display: flex;
      height: 100%;
    }
    .content-container {
      padding: 20px;
    }
  `}</style>
  </div>

  export default MainPage;