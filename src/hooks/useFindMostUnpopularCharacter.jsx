import { useEffect, useState } from "react";

import _ from "lodash";
import axios from "axios";

function useFindMostUnpopularCharacter(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Get characters data
    const charactersData = async () => {
      const { data } = await axios(url);
      return data;
    };

    // Get most unpopulated data
    (async function getMostUnpopularCharacter() {
      const { results } = await charactersData();
      const mostUnpopularCharacter = 
        _.chain(results)
        .filter(["origin.name", "Earth (C-137)"]) // Filter by origin name
        .orderBy([(o) => o.episode.length], ["asc", "desc"]) // OrderBy episode apprance
        .first() // Get first item
        .value();

      setData(mostUnpopularCharacter); // Set character data
    })()
    .then(res => (res))
    .catch(err => (console.log(err)))
    
  }, [url]);

  return { data };
}

export default useFindMostUnpopularCharacter;
