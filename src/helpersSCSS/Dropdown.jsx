import React from "react";
import {Dropdown} from "react-bootstrap";
import { Link } from 'react-scroll'





let Dropdown2 = () => {
    // @ts-ignore

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link  activeClass="active"
                           to={"features"}
                           spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}>Features</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <Link  activeClass="active"
                           to={"works"}
                           spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}>Works</Link>
                     </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                    <Link  activeClass="active"
                    to={"team"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Our Team</Link>
                    </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <Link  activeClass="active"
                           to={"reviews"}
                           spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}>Download</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Dropdown2