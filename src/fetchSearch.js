async function fetchSearch(requestParams) {
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${requestParams.animal}&location=${requestParams.location}&breed=${requestParams.breed}`,
  );

  if (!res.ok) {
    throw new Error(
      `pet search not okay: ${requestParams.animal}, ${requestParams.location}, ${requestParams.breed}`,
    );
  }

  return res.json();
}

export default fetchSearch;
