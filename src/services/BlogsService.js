import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogsByProfileId(query) {
    AppState.blogs = []
    const res = await api.get(`api/blogs`, { params: query })
    // logger.log(res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async getPosts() {
    AppState.blogs = []
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
    // logger.log(AppState.blogs)
  }

  async createBlog(blogData) {
    const res = await api.post('/api/blogs', blogData)
    AppState.blogs.push(new Blog(res.data))
  }
}

export const blogsService = new BlogsService()