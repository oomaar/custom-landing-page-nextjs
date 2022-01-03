import aboutData from "../../data/aboutData.json";
import {
    AboutContainer,
    AboutCards,
    AboutCard,
    AboutCardImage,
} from "./styledAbout";

export const About = () => {
    const data = aboutData.map(card => (
        <AboutCard key={card.id}>
            <AboutCardImage src={card.img} />
            <h4>{card.title}</h4>
            <p>{card.text}</p>
        </AboutCard>
    ))
    return (
        <AboutContainer>
            <AboutCards>
                {data}
            </AboutCards>
        </AboutContainer>
    );
};