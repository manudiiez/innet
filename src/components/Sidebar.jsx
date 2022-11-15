import '../css/component/sidebar.css'

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  LocalHospital,
  HouseOutlined,
  Announcement
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                <span>Inicio</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Listas</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link">
              <li className="sidebarListItem">
                <LocalHospital className="sidebarIcon" />
                <span>Medicos</span>
              </li>
            </NavLink>
            <NavLink to="/patient" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <span>Pacientes</span>
              </li>
            </NavLink>
            <NavLink to="/areas" className="link">
              <li className="sidebarListItem">
                <HouseOutlined className="sidebarIcon" />
                <span>Areas</span>
              </li>
            </NavLink>
            <NavLink to="/alerts" className="link">
              <li className="sidebarListItem">
                <Announcement className="sidebarIcon" />
                <span>Alertas</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;