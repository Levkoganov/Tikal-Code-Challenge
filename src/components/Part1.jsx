import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import useFindMostUnpopularCharacter from "../hooks/useFindMostUnpopularCharacter"

function Main() {
  // Custom hook
  const { data, error, pending } = useFindMostUnpopularCharacter("/character");

  return (
    <Container >
      <h1> PART I: The Most popular characters from Earth C-137 </h1>
      
      {/* Loading */}
      {pending && "loading..."}

      {/* Error handling */}
      {error && error}

      {/* Response */}
      { data && <Table striped bordered hover >
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
      </Table>}
    </Container>
  )
}

export default Main