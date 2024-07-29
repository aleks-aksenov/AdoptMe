const fetchBreedList = async (animal) => {
  if (!animal) {
    return [];
  }
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal.toLowerCase()}`,
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
