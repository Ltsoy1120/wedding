import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from "@mui/material"
import { formattedDate, User } from "../../App"

interface ChildrenTableProps {
  users: User[]
  deleteUser: (id: string) => void
}

const ChildrenTable = ({ users, deleteUser }: ChildrenTableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Ф.И.О</TableCell>
              <TableCell>Родитель</TableCell>
              <TableCell>Возраст</TableCell>
              <TableCell>Дата подтверждения</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={user._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell style={{ color: "#bebebe", fontSize: "12px" }}>
                  {user.parent}
                </TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{formattedDate(new Date(user.createdAt))}</TableCell>
                <TableCell onClick={() => deleteUser(user._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    fill="#d38a04"
                  >
                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                  </svg>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h3>Итого: {users.length}</h3>
    </>
  )
}

export default ChildrenTable
