import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import Switch from "@material-ui/core/Switch";
// import serviceCall from "../utils/serviceCall/serviceCall";
import axios from "axios";
import * as fetchActions from "../store/actions/fetchActions";

const Users = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const fetchedUsers = useSelector((state) => state.users);

  const handleStatusChange = (rowData) => {
    const userID = rowData.id;
    const currentStatus = rowData.active;
    let updatedUsers = [...fetchedUsers];
    const toggledIndex = updatedUsers.findIndex((el) => el.id === userID);
    updatedUsers[toggledIndex].active = !updatedUsers[toggledIndex].active;

    dispatch(fetchActions.setUsers(updatedUsers));
  };

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
      field: "phone",
    },
    {
      title: "status",
      field: "status",
      render: (rowData) => (
        <Switch
          checked={rowData.active}
          onChange={() => handleStatusChange(rowData)}
          color="primary"
          // name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      ),
    },
  ];

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
      isLoading={isLoading}
      columns={columns}
      data={fetchedUsers}
      options={{
        search: false,
        paging: false,
        search: false,
        selection: true,
      }}
    ></MaterialTable>
  );
};

export default Users;
