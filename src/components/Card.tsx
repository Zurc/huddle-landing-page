import { StyledCard } from './styles/Card.styled';

type CardProps = {
  id: number;
  title: string;
  body: string;
  image: string;
};

const Card = ({ item, direction }: { item: CardProps; direction: string }) => {
  return (
    <StyledCard direction={direction}>
      <div className="body">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
      <div className="image">
        <img src={`./images/${item.image}`} alt={item.title} />
      </div>
    </StyledCard>
  );
};

export default Card;
