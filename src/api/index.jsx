const COHORT_NAME = '2301-ftb-mt-web-pt';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function fetchPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchMyProfile(token) {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/JSON',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
}

export async function createNewPost(
  itemName,
  itemDescription,
  itemPrice,
  itemLocation,
  willDeliverItem,
  token
) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: itemName,
          description: itemDescription,
          price: itemPrice,
          location: itemLocation,
          willDeliver: willDeliverItem,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
