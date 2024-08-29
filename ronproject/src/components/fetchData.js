const accessToken = 'YOUR_ACCESS_TOKEN';
const url = `https://graph.instagram.com/me?fields=id,username,media_count,account_type,followers_count&access_token=${accessToken}`;



const fetchData = () => {
  return fetch(url) // Replace with your actual URL
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const details = {
        User: data.username,
        Followers: data.media_count,
      };
      console.log(details);
      return details;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
};

export default fetchData;


