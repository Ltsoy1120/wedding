import { Router } from "express"
import { createUser, getUsers, deleteUser } from "../controllers/users.js"

const router = new Router()

router.post("/new", createUser)
router.get("/", getUsers)
router.delete("/:id/delete", deleteUser)

export default router
