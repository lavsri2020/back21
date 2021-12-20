const Restaurants = require('../Models/restaurants')

exports.getRestaurantsByLocId = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({ location_id: locId })
        .then(response => {
            res.status(200).json({
                message: "Restaurants Fetched Succesfully",
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.filterRestaurants = (req, res) => {
    let { mealtype, location, cuisine, lcost, hcost, page, sort, itemsPerPage,restaurant_name } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;
    itemsPerPage = itemsPerPage ? itemsPerPage : 2;

    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;

    let filterObj = {};

    mealtype && (filterObj["mealtype_id"] = mealtype);
    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] = { $in: cuisine });
    restaurant_name && (filterObj["name"]= name);
    lcost && hcost && (filterObj["min_price"] = { $gte: lcost, $lte: hcost });
     console.log('FilterObj '+JSON.stringify(filterObj));
    Restaurants.find(filterObj).sort({ min_price: sort })
        .then(response => {
            
            const filteredResponse = response.slice(startIndex, endIndex);
            const data=Math.ceil(response.length/itemsPerPage);
            console.log(data);
            res.status(200).json({
                message: "Restaurants Fetched Succesfully",
                restaurants: filteredResponse,
                data:data
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.getRestaurantDetailsById = (req, res) => {
    const { resId } = req.params;
    Restaurants.findById(resId)
        .then(response => {
            res.status(200).json({
                message: "Restaurant Fetched Succesfully",
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}