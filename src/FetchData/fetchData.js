export const fetchReviews = async () => {
  try {
    const response = await fetch("http://localhost:3000/reviews");
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Error fetching reviews");
  }
};

export const fetchDoctors = async () => {
  try {
    const response = await fetch("http://localhost:3000/doctors");
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error("Error fetching Doctors");
  }
};
