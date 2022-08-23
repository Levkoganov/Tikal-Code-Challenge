import { useEffect, useState} from 'react'

import _ from "lodash";
import axios from "axios";

function useCharacterPopularety(url) {
  const [data, setData] = useState(null)

  useEffect(() => {
    // Get all characters
    const charactersData = async () => {
      const { data } = await axios(url);
      return data
    };

    // Filter by character name
    (async function mostPopularCharacter () {
      const { results } = await charactersData();
      const characters = _.filter(results,
        (o) => ( 
          o.name === "Summer Smith" ||
          o.name === "Rick Sanchez" ||
          o.name === "Morty Smith"  ||
          o.name === "Beth Smith"   ||
          o.name === "Jerry Smith"
        )
      );

      setData(characters); // Set character data
    })()
    .then(res => (res))
    .catch(err => (console.log(err)))
    
  },[url])

  return {data}
}

export default useCharacterPopularety