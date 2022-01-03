import { Button } from "../../Global/GlobalStyle";
import {
    Header,
    Feature,
    Heading,
    SubHeading,
    Buttons,
} from "./styledHero";

export const Hero = () => {
    return (
        <Header>
            <Feature>
                <Heading>Welcome</Heading>
                <SubHeading>Domain / Hosting / Websites</SubHeading>
            </Feature>
            <Buttons>
                <Button contact>Contact Us</Button>
                <Button>Learn How</Button>
                <Button>Youtube</Button>
            </Buttons>
        </Header>
    );
};