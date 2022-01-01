import {
    Header,
    Heading,
    SubHeading,
    Buttons,
    Button,
} from "./styledHero";

export const Hero = () => {
    return (
        <Header>
            <Heading>Welcome to Toky Tech</Heading>
            <SubHeading>In this website you can Buy Domain / Hosting / Build A Website</SubHeading>
            <Buttons>
                <Button contact>Contact Us</Button>
                <Button>Learn Making</Button>
                <Button>Youtube</Button>
            </Buttons>
        </Header>
    );
};