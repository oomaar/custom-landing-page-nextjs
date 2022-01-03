import { Card } from "../../components";
import { SectionTitle } from "../../Global/GlobalStyle";
import { Cards, Container } from "./styledServices";

export const Services = () => {
    return (
        <Container>
            <SectionTitle>Our Services</SectionTitle>
            <p>Get Your Own Website</p>

            <Cards>
                <Card />
            </Cards>
        </Container>
    );
};