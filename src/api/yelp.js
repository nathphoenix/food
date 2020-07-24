import axios from 'axios';


export default axios.create({
    //This si the root url that we want to make request to
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
          "Bearer emYEDSQ_mSEwAhLTqyOyZtIrSG5XakIdlzEgTUgC8y6aOtJHMvdDHT7zazv7EdJDld4j5cFGPVqBh0FmT82g35Pjqy_ypR3nDX2Twc0GC9BX1ppqQiVA9hSUy-ESX3Yx"
    }
});