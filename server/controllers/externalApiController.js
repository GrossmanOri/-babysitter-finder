const axios = require('axios');

exports.getCities = async (req, res) => {
  try {
    const response = await axios.post(
      'https://countriesnow.space/api/v0.1/countries/cities',
      {
        country: 'Israel'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cities:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to fetch cities' });
  }
};





