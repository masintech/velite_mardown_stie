// This will import from .velite after build
let posts = []

try {
  // Dynamic import to handle build time
  const veliteData = require('../.velite/index.js')
  posts = veliteData.posts || []
} catch (error) {
  console.log('Velite data not built yet')
}

export function getAllPosts() {
  return posts.filter(post => post.published)
}

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug)
}
