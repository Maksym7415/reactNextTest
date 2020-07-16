import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default ({name, description, model, image}) => {
  return (
    <div className='card-container'>
      <Card className='card'>
        <CardImg top width="100px" height="300px" src={`../../images/${image}.jpg`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{model}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>

      <style jsx>{`
        .card-container {
          width: 300px;
          height: 400px;
          margin: 0 5px;
        }
        .card {
          width: 300px;
          height: 400px;
        }
        .image {
          width: 280px;
          height: 300px;
        }
      `}</style>
    </div>
  );
};
