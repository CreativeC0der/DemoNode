Exercise: Build a Simple Blog API
This exercise tests knowledge from Points 1, 2, and 3, covering Express setup, routing, middleware, and request-response handling.

📌 Requirements
Create a Blog API that allows users to manage blog posts.
Task 1: Set Up Express Server
Initialize a Node.js project (npm init -y).
Install Express (npm install express).
Create an index.js file and set up an Express server listening on port 4000.

let blogs = [
    {
        'id': 1,
        'title': 'some title',
        'body': 'some body',
        'author': 'some author'
    },
    {
        'id': 2,
        'title': 'title2',
        'body': 'body 2',
        'author': 'some author2'
    }
]

Task 2: Implement API Routes
GET / → Returns a welcome message.
GET /posts → Returns a list of all blog posts.
GET /posts/:id → Returns a single post based on id. (PARAMS)
POST /posts → Accepts JSON body { id,title, content,author } and creates a new post.
PUT /posts/:id → Updates an existing post.
DELETE /posts/:id → Deletes a post.
👉 Use an array to store posts (no database needed). Each post should have { id, title, content,author }.

Task 3: Implement Middleware
Global Logger Middleware → Logs each request's method and URL.
Validation Middleware - validate 
Body Parser Middleware → Use express.json() to parse JSON body.
404 Middleware → Returns "Route not found" for invalid routes.

Task 4: Handle Request Data Properly
-- Extract route parameters (:id) to find a post.
-- Use query parameters (?search=author) to filter posts by author.
-- Send appropriate status codes (200, 201, 400, 404).

📌 Bonus Challenge
-- Validate request body (Ensure title and content exist before creating a post).
-- Use res.status() for error handling (e.g., return 400 Bad Request if input is invalid).


🎯 Expected Learning Outcomes
✅ Express server setup ✅ RESTful routes (GET, POST, PUT, DELETE) ✅ Middleware implementation (logger, body parser, error handling) ✅ Request data handling (req.params, req.query, req.body, req.headers) ✅ Sending proper responses with res.json(), res.status(), and res.send()

This exercise ensures they understand routing, middleware, and request-response handling before moving on to databases and authentication. 🚀

