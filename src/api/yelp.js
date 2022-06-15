import React from "react";
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer JiNVIWc1XLoHeKl4BR_ejjVDVvC_RdeATKET-kHAfT7mH173ieLCz8F7OD24KB68-50rYNXhBQt28vSPQIprNeKPuDwlalhAIUoNm3WRNkgv_yUfm4W75fMQkbKJYnYx'
    }    
});



