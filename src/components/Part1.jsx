import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import useFindMostUnpopularCharacter from "../hooks/useFindMostUnpopularCharacter"

function Main() {
  // Custom hook
  const { data } = useFindMostUnpopularCharacter("/character");

  return (
    <Container >
      <h1> PART I: The Most unpopular character from Earth C-137 </h1>
      { data ? <Table striped bordered hover >
        <tbody>
          <tr>
            <td>Character name:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Origin name:</td>
            <td>{data.origin.name}</td>
          </tr>
          <tr>
            <td>Origin dimension:</td>
            <td>{data.location.name}</td>
          </tr>
          <tr>
            <td>Poplurity:</td>
            <td>{data.episode.length}</td>
          </tr>
        </tbody>
      </Table> : "loading..."}
    </Container>
  )
}

export default Main