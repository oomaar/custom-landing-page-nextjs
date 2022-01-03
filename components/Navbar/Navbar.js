import { useState } from "react";
import {
    Nav,
    Logo,
    LinksContainer,
    LinksList,
    ListItem,
    Link,
    ToogleButton,
    Bar,
} from "./styledNavbar";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    return (
        <Nav active={active}>
            <Logo>land page</Logo>

            <ToogleButton href="#" onClick={() => setActive(state => !state)}>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </ToogleButton>

            <LinksContainer active={active}>
                <LinksList>
                    <ListItem>
                        <Link>Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Services</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Websites</Link>
                    </ListItem>
                    <ListItem>
                        <Link>About</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Contact</Link>
                    </ListItem>
                    <ListItem>
                        <Link>Join Course</Link>
                    </ListItem>
                </LinksList>
            </LinksContainer>
        </Nav>
    );
};