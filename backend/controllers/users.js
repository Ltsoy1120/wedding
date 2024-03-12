import User from "../models/User.js"

export const createUser = async (req, res) => {
  try {
    console.log("req.body", req.body)
    if (req.body.presense === "absent") {
      const meAbsent = new User({
        presense: req.body.presense,
        fullName: req.body.myName
      })
      await meAbsent.save()
    }
    if (req.body.presense === "alone") {
      const meAlone = new User({
        presense: req.body.presense,
        fullName: req.body.myName
      })
      await meAlone.save()
    }
    if (req.body.presense === "together") {
      const me = new User({
        presense: req.body.presense,
        fullName: req.body.myName,
        pairName: req.body.pairName
      })
      await me.save()

      const pair = new User({
        fullName: req.body.pairName,
        pairName: req.body.myName
      })
      await pair.save()

      if (req.body.hasChildren && req.body.children.length > 0) {
        req.body.children.map(async child => {
          const newChild = new User({
            fullName: child.fullName,
            age: child.age,
            parent: req.body.myName ?? req.body.pairName
          })
          await newChild.save()
        })
      }
    }

    return res.json({ message: "Ваш ответ успешно отправлен" })
  } catch (error) {
    res.json({ message: "Произошла ошибка" })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (e) {
    res.status(500).send(e)
  }
}

export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id)
  try {
    user.deleteOne()
    const users = await User.find()
    res.send({ users, message: "user deleted!", _id: user._id })
  } catch (error) {
    res.send(error)
  }
}
