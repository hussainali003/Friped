const GOOGLE_MAPS_API_KEY = 'AIzaSyCfP1hTT3Q6Pz0uu-kjmZs4y33FVnfyymc';

const reverseGeocode = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`
    );
    const data = await response.json();

    if (data.status === 'OK') {
      const result = data.results[0];
      const addressComponents = result.address_components;

      const city = addressComponents.find(comp =>
        comp.types.includes('locality') || comp.types.includes('administrative_area_level_2')
      )?.long_name;

      const country = addressComponents.find(comp =>
        comp.types.includes('country')
      )?.long_name;

      return {
        fullAddress: result.formatted_address,
        city: city || '',
        country: country || '',
      };
    } else {
      console.warn('Reverse geocoding failed:', data.status);
      return null;
    }
  } catch (error) {
    console.error('Geocoding error:', error);
    return null;
  }
};

export default reverseGeocode;
