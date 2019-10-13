import { BASE_URL, DEV_BASE_URL } from '../utils/constant'
import createRepository from '../api/repository'
export default (ctx, inject) => {
  if (ctx.isDev) {
    ctx.$axios.defaults.baseURL = DEV_BASE_URL
  } else {
    ctx.$axios.defaults.baseURL = BASE_URL
  }
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('todoRepository', repositoryWithAxios('todos'))
  inject('authRequest', repositoryWithAxios('login'))
}
