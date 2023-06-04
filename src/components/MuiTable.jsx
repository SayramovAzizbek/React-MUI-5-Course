import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const MuiTable = () => {
  const tableData = [
    {
      id: 1,
      first_name: "Maegan",
      last_name: "Linnock",
      email: "mlinnock0@washington.edu",
      gender: "Female",
      ip_address: "220.176.110.82",
    },
    {
      id: 2,
      first_name: "Evvy",
      last_name: "Fullegar",
      email: "efullegar1@yellowpages.com",
      gender: "Female",
      ip_address: "0.91.33.144",
    },
    {
      id: 3,
      first_name: "Kerk",
      last_name: "Pasley",
      email: "kpasley2@flavors.me",
      gender: "Male",
      ip_address: "115.74.158.99",
    },
    {
      id: 4,
      first_name: "Zahara",
      last_name: "Snoddin",
      email: "zsnoddin3@uol.com.br",
      gender: "Female",
      ip_address: "144.255.134.210",
    },
    {
      id: 5,
      first_name: "Frayda",
      last_name: "O'Farris",
      email: "fofarris4@wiley.com",
      gender: "Female",
      ip_address: "139.242.233.138",
    },
    {
      id: 6,
      first_name: "Nicki",
      last_name: "Westwood",
      email: "nwestwood5@census.gov",
      gender: "Female",
      ip_address: "38.205.208.166",
    },
    {
      id: 7,
      first_name: "Nickie",
      last_name: "Williams",
      email: "nwilliams6@xinhuanet.com",
      gender: "Female",
      ip_address: "140.96.217.106",
    },
    {
      id: 8,
      first_name: "Mitzi",
      last_name: "List",
      email: "mlist7@bloglines.com",
      gender: "Female",
      ip_address: "94.109.50.186",
    },
    {
      id: 9,
      first_name: "Tudor",
      last_name: "Dews",
      email: "tdews8@hc360.com",
      gender: "Male",
      ip_address: "172.238.10.107",
    },
    {
      id: 10,
      first_name: "Prinz",
      last_name: "Dymick",
      email: "pdymick9@huffingtonpost.com",
      gender: "Male",
      ip_address: "121.14.225.226",
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
