export const getUserIdFromLocalStorage = () => {
  try {
    const storedUserJSON = localStorage.getItem("user");
    if (!storedUserJSON) return null;
    const parseUser = JSON.parse(storedUserJSON);
    return parseUser.id;
    console.log(parseUser.id);
  } catch (error) {
    console.log(error);
  }
};
