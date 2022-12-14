var watch = require('../models/watch'); 
 
// List of all watchs 
exports.watch_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: watch list'); 
}; 

// List of all watchs 
exports.watch_list = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.send(thewatchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  


 
// for a specific watch. 
exports.watch_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: watch detail: ' + req.params.id); 
}; 
 
// List of all watchs 
exports.watch_detail = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.send(thewatchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle watch create on POST. 
exports.watch_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: watch create POST'); 
}; 

// List of all watchs 
exports.watch_create_post = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.send(thewatchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle watch delete form on DELETE. 
exports.watch_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: watch delete DELETE ' + req.params.id);  
}; 

// List of all watchs 
exports.watch_delete = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.send(thewatchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// Handle watch update form on PUT. 
exports.watch_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: watch update PUT' + req.params.id);    
};  

// List of all watchs 
exports.watch_update_put = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.send(thewatchs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.watch_view_all_Page = async function(req, res) { 
    try{ 
        thewatchs = await watch.find(); 
        res.render('watchs', { title: 'watch Search Results', results: thewatchs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
};   

// Handle watch create on POST. 
exports.watch_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new watch(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"watch_brand":"casio", "watch_cost":150, "watch_color":"blue"} 
    document.watch_brand = req.body.watch_brand; 
    document.watch_cost = req.body.watch_cost; 
    document.watch_color = req.body.watch_color;  

    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){  
        res.status(500); 
        res.send(`{"error": ${err}}`);  
    }   
};