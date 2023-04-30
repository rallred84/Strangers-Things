const COHORT_NAME = '2301-ftb-mt-web-pt';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export async function fetchPosts(myProfile, token) {
  try {
    const response = !myProfile._id
      ? await fetch(`${BASE_URL}/posts`)
      : await fetch(`${BASE_URL}/posts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
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
    return result.data;
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

export async function sendMessage(postId, token, messageContent) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: `${messageContent}`,
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

export async function updatePost(
  postToUpdate,
  token,
  itemName,
  itemDescription,
  itemPrice,
  itemLocation,
  willDeliverItem
) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postToUpdate}`, {
      method: 'PATCH',
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

export async function deletePost(postId, token) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
}
