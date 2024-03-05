import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  
  const [isFetching, setIsFetching] = useState();
  const [availablePlaces, setAvailablePlaces] = useState([]);  
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      
      try {
        const response = await fetch('http://localhost:3000/places');
        const resData = await response.json();
  
        if(!response.ok) {
          const error = new Error('Failed to fetch places');
          throw error
        }
        setAvailablePlaces(resData.places);
      } catch(error) {
        setError({
          message: error.message || 'Could not fetch places, please try again later.',
        });
      }
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message}/>
  }

 

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
