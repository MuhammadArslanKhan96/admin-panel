import axiosInstance from '../api/axiosInstance';

const fetchData = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
