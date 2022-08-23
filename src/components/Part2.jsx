import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import useCharacterPopularety from "../hooks/useCharacterPopularety";

function Part2() {
  // Custom hook
  const { data, error, pending } = useCharacterPopularety("character");

  return (
    <Container>
      <h1> PART II: The Most unpopular character from Earth C-137 </h1>

      {/* Loading */}
      {pending && "loading..."}

      {/* Error handling */}
      {error && error}

      {/* Response */}
      { data && <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>num of episodes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res,idx) =>(
            <tr key={res.id}>
              <td>{idx + 1}</td>
              <td>{res.name}</td>
              <td>{res.episode.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>} 
    </Container>
  );
}

export default Part2;
