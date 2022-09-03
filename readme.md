we have used static website. using app.use(express.static(static_file_path))
For live website we have used //Thse two needed for live website
app.use(express.json()); // just for postman
app.use(express.urlencoded({ extended: false }));

Learned from https://www.youtube.com/watch?v=XZiFBlfluZk

To learn more about handlebars, go here : https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/
