/*
In this piece of code,
we first create a constant called "express"
that we will later use to set up the express framework. 
*/
const express = require('express');



/**
we need to call the constant express functionwe just required.
It will return an Express-Object.
This Express-Object is essential and used to set up the application itself, add routes 
and rest-endpoints initialize middleware.
*/
const app = express();


/*
Now that we have initialized the framework,
we can fire up our server.
This is done by calling the "listen"-method of our Express-Object.
This method tells the server to 
listen for incoming requests on the given port.
*/
app.listen(8000, () => {
    console.log('server started !');
});
/**
To define a route, we call the route-method on our express object. 
Next, we wall the get-method on that route, 
to tell express that we want to register a callback for the HTTP-get request at that specific route.
 */
app.route('/api/cats').get((req, res) => {
    res.send({
        cat: [{ name: 'caty' }, { name: 'losy' }]
    });
});


/**
 * getting one specific element from the API. 
 */
app.route('/api/cats/:name').get((req, res) => {
    const catName = req.params['name'];
    res.send([{ name: catName}]
        
    );
});


