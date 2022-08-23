import { useEffect, useState } from "react";

import _ from "lodash";
import axios from "axios";

function useFindMostUnpopularCharacter(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  // Get most unpopulated data
  const getMostUnpopularCharacter = async ({results}) => {
    try {
      const unpopularCharacter = 
        _.chain(results)
        .filter(["origin.name", "Earth (C-137)"])
        .orderBy([(o) => o.episode.length], ["asc", "desc"]) // OrderBy episode apprance
        .first() // Get first item
        .value();
  
      setTimeout(() => {
        setPending(false);
        return setData(unpopularCharacter);
      }, 1000)
      
    } catch (err) {
      setPending(false);
      return setError(err.message);
    }
  }

  useEffect(() => {
    // Get characters data
    const charactersData = async () => { 
      try {
        const { data } = await axios(url);
        await getMostUnpopularCharacter(data); // Get most unpopular character

      } catch (err) {
        setPending(false);
        setError(err.message);
      }
    };

    charactersData();
    
  }, [url]);

  return { data, error, pending };
}

export default useFindMostUnpopularCharacter;
