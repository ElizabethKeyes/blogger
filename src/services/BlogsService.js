import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getPosts() {
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data.map(b => new Blog(b))
    logger.log(AppState.blogs)
  }
}

export const blogsService = new BlogsService()