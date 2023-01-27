export const getData = async () => {
  const data = await fetch("http://localhost:3001/api/milk");
  const results = await data.json();
  return results;
};
