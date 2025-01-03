import './App.css';
import SideMenu from './components/sideMenu';
import BrowserBreadcrumb from './components/browserBreadcrumb';
import ServerContent from './components/serverContent';
import Invite from './components/rightmenu';
function App() {

  return (
    <>
      <div className='bg-darker'></div>
      <SideMenu />
      <hr className="side-menu-line"/>

      <div className="mid-section">
        <BrowserBreadcrumb />
        <ServerContent />
      </div>
      <Invite></Invite>
    </>
  )
}

export default App;
