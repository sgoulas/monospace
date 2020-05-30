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
    let updatedUsers = [...fetchedUsers];
    const userIndex = updatedUsers.findIndex((el) => el.id === userID);
    updatedUsers[userIndex].active = !updatedUsers[userIndex].active;

    dispatch(fetchActions.setUsers(updatedUsers));
  };

  const columns = [
    {
      title: "type",
      field: "type",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
      },
    },
    {
      title: "name",
      field: "name",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
      },
    },
    {
      title: "email",
      field: "email",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
      },
    },
    {
      title: "telephone",
      field: "phone",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
      },
    },
    {
      title: "status",
      field: "status",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
      },
      render: (rowData) => (
        <Switch
          checked={rowData.active}
          onChange={() => handleStatusChange(rowData)}
          color="primary"
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
        rowStyle: {
          backgroundColor: "#F8F9FB",
          color: "#39628D",
          fontWeight: "bold",
        },
      }}
    ></MaterialTable>
  );
};

export default Users;
