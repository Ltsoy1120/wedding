import { Router } from "express"
import {
  createUser,
  getUsers,
  deleteUser,
  createUserByAdmin
} from "../controllers/users.js"

const router = new Router()

router.post("/new", createUser)
router.post("/add", createUserByAdmin)
router.get("/", getUsers)
router.delete("/:id/delete", deleteUser)

export default router
