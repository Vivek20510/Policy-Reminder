import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img
          src="https://www.alert-software.com/hubfs/writing%20company%20policies.png"
          alt=""
        />
        <p>
        This Policy Reminder Website is a very useful and handy application tool helps you keeping track 
        and reminder alert by sms / email / notifications of policies about to expire, current status,
         already due and lapsed policies and helps an agent to convert to the deal. Algorithms placed in 
        the system enable agents to spot the opportunities and convert them to business. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
        <li className="sidebarListItem">LIFE</li>
            <li className="sidebarListItem">HEALTH</li>
            <li className="sidebarListItem">MOTOR</li>
            <li className="sidebarListItem">CAR</li>
            <li className="sidebarListItem">OTHERS</li>
        </ul>
      </div>
    
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}