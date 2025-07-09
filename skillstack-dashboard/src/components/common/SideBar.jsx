import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

const SideBar = () => {
    return (
        <div className="p-3 p-md-2 p-lg-3">
            <h3 className="mb-4">SkillStack</h3>
            <Nav vertical pills>
                <NavItem>
                    <NavLink to="/dashboard" end className="nav-link">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dashboard/projects" className="nav-link">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dashboard/skills" className="nav-link">Skills</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dashboard/blogs" className="nav-link">Blogs</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/dashboard/setting" className="nav-link">Settings</NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default SideBar