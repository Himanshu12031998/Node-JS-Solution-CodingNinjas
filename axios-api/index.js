// Please do not change the prewritten code
const axios=require('axios')

  // Write your code here
const Solution = async () => {
  // Write your code here
  const response=await axios.get('https://api.codingninjas.com/api/v3/event_tags')
  console.log(response.data);
};

Solution();
// exports { Solution };

module.exports=Solution