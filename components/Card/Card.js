import { Button } from "../../Global/GlobalStyle";
import { RiShoppingCart2Fill } from "react-icons/ri";
import servicesData from "../../data/servicesData.json";
import {
    CardContainer,
    Icon,
    CardTitle,
    CardSubtitle
} from "./styledCard";

export const Card = () => {
    const data = servicesData.map(service => (
        <CardContainer key={service.id}>
            <Icon>
                <RiShoppingCart2Fill />
            </Icon>

            <CardTitle>{service.title}</CardTitle>
            <CardSubtitle>{service.subTitle}</CardSubtitle>

            <Button contact>{service.buttonText}</Button>
        </CardContainer>
    ))
    return (
        <>
            {data}
        </>
    );
};