import { useEffect, useState } from "react";

import _ from "lodash";
import axios from "axios";

function useCharacterPopularety(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(true);

  // Filter by character name
  const filterCharacters = async ({results}) => {
    try {
      const characters = _.filter(
        results,
        (o) =>
          o.name === "Summer Smith" ||
          o.name === "Rick Sanchez" ||
          o.name === "Morty Smith" ||
          o.name === "Beth Smith" ||
          o.name === "Jerry Smith"
      );

      setPending(false);
      setData(characters);

    } catch (err) {
      setPending(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    // Get all characters
    const charactersData = async () => {
      try {
        const { data } = await axios(url);
        filterCharacters(data); // Get Filtered characters

      } catch (err) {
        setPending(false);
        setError(err.message);
      }
    };

    charactersData();
  }, [url]);

  return { data, error, pending };
}

export default useCharacterPopularety;
