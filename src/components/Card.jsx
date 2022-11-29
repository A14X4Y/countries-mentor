import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;
const CardListItem = styled.li``;

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((item) => (
            <CardListItem key={item.id}>
              <strong>{item.title}:</strong>
              {item.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
