import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function PlayerList({props}) {
  let player=props

  return (
    <CardGroup style={{ display:"flex", alignItems:"center" , gap:"20px",flexDirection:"row"}}>
      <Card style={{maxWidth:"650px"}}>
        <Card.Img style={{height:"700px",width:"100%",alignItems:"center"}} variant="top" src={player.image} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>{player.age}</Card.Text>
          <Card.Text>{player.nationality}</Card.Text>
          <Card.Text>{player.team}</Card.Text>
          <Card.Text>{player.jerseyNumber}</Card.Text>

        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default PlayerList;