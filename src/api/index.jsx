const cohortName = '2301-ftb-mt-web-pt';
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`;

export async function fetchPosts() {
  try {
    const response = await fetch(`${baseUrl}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
