import express from 'express'
import { PostBusiness } from '../database/business/PostBusiness'
import { PostDatabase } from '../database/PostDatabase'
import { PostController } from '../database/controller/PostController'
import { UserDatabase } from '../database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { TokenManager } from '../services/TokenManager'

export const postRouter = express.Router()

const postController = new PostController (
    new PostBusiness(
        new PostDatabase(),
        new UserDatabase(),
        new IdGenerator(),
        new TokenManager()
    )
)

postRouter.get('/', postController.getPost)
postRouter.post('/', postController.createPost)
postRouter.put('/:id', postController.editPost)
postRouter.delete('/:id', postController.deletePost)
postRouter.put('/:id/like', postController.likeDislikePost)
