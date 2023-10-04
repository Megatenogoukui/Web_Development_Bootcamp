const express = require('express');
const axios = require('axios');
const _ = require('lodash');

const app = express();
const port = 3000;

// Middleware for fetching data from the third-party blog API
app.get('/api/blog-stats', async (req, res) => {
  try {
    // Make the HTTP request to the blog API
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs', {
      headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
      }
    });

    // Extract the blog data from the response
    const blogs = response.data;
    console.log(blogs)
    // Calculate analytics
    const totalBlogs = blogs.length;
    const longestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);
    const privacyBlogs = _.filter(blogs, (blog) => _.includes(blog.title.toLowerCase(), 'privacy'));
    const uniqueTitles = _.uniqBy(blogs, 'title');

    // Create the response JSON object
    const statistics = {
      totalBlogs,
      longestBlogTitle: longestTitleBlog.title,
      privacyBlogsCount: privacyBlogs.length,
      uniqueBlogTitles: uniqueTitles.map((blog) => blog.title),
    };

    res.json(statistics);
  } catch (error) {
    console.error('Error fetching or processing data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Blog search endpoint
app.get('/api/blog-search', (req, res) => {
  const query = req.query.query.toLowerCase(); // Convert query to lowercase for case-insensitive search

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "query" is required.' });
  }

  try {
    // Implement a custom search function
    const searchResults = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );

    res.json(searchResults);
  } catch (error) {
    console.error('Error during search:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});