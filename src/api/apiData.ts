// random text gengeratorのAPI

export const fetchRandomText = async (): Promise<void> => {
  const url = 'https://lorem-ipsum-api.p.rapidapi.com/sentence?amount=5';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ad8ef36b78msh80bd9d002b170abp1e5d41jsn0332d379f868',
      'x-rapidapi-host': 'lorem-ipsum-api.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.text)
  } catch (error) {
    console.error(error);
    throw error;
  }
  };