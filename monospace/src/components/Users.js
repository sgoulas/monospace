import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MaterialTable from "material-table";
// import serviceCall from "../utils/serviceCall/serviceCall";
import axios from "axios";
import * as fetchActions from "../store/actions/fetchActions";

const columns = [
  {
    title: "type",
    field: "type",
  },
  {
    title: "name",
    field: "name",
  },
  {
    title: "email",
    field: "email",
  },
  {
    title: "telephone",
    field: "telephone",
  },
  {
    title: "status",
    field: "status",
  },
];
const mockData = [
  {
    type: "",
    name: "",
    email: "",
    telephone: "",
    status: "",
  },
];

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUsersUrl =
      "http://spiros.users.challenge.dev.monospacelabs.com/users";

    dispatch(fetchActions.getUsersInit());
    axios
      .get(getUsersUrl)
      .then((response) => {
        console.log(response.data);
        dispatch(fetchActions.getUsersSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchActions.getUsersFail());
      });
  }, []);

  return (
    <MaterialTable
      title="users table"
      columns={columns}
      data={mockData}
      options={{
        search: false,
        paging: false,
        search: false,
      }}
    ></MaterialTable>
  );
};

export default Users;
