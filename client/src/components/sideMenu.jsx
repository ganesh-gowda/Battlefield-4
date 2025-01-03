function GameItems() {
  return (
    <div className="side-menu-games">
      <div className="side-items-container">
        <img src="/battlefield-5.png" alt="" />
        <p>BATTLEFIELD V</p>
      </div>
      <div className="side-items-container">
        <img src="/battlefield-1.png" alt="" />
        <p>BATTLEFIELD 1</p>
      </div>
      <div className="side-items-container active-menu">
        <div className="active-menu-decor" />
        <img src="/battlefield-4.png" alt="" />
        <p>BATTLEFIELD 4</p>
      </div>
      <div className="side-items-container">
        <img src="/battlefield-hardline.png" alt="" />
        <p>BATTLEFIELD HARDLINE</p>
      </div>
    </div>
  )
}

function OtherItems() {
  return (
    <div className='side-menu-other'>
      <div className="side-items-container">
        <img src="/career.png" alt="" />
        <p>CAREER</p>
      </div>
      <div className="side-items-container">
        <img src="/watch.svg" alt="" />
        <p>WATCH</p>
      </div>
      <div className="side-items-container">
        <img src="/news.svg" alt="" />
        <p>NEWS</p>
      </div>
    </div>
  )
}

function ExitMenu() {
  return (
    <div className="side-menu-exit">
      <div className='side-menu-misc'>
        <div className="side-items-container">
          <img src="/side-menu-help.svg" alt="" />
          <p>HELP</p>
        </div>
        <div className="side-items-container">
          <img src="/side-menu-quit.svg" alt="" />
          <p>QUIT</p>
        </div>
      </div>
    </div>
  )
}

export default function SideMenu() {
  return (
    <div className='side-menu'>
      <div className='side-menu-tabs'>
        <GameItems />
        <OtherItems />
      </div>
      <ExitMenu />
    </div>
  )
}