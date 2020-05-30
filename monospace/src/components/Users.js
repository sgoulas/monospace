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

  const fetchUserData = () => {
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
  };

  const updateUsersTableData = (updatedUser, userIndex) => {
    const updatedUsers = [...fetchedUsers];
    updatedUsers[userIndex] = updatedUser;
    dispatch(fetchActions.setUsers(updatedUsers));
  };

  const handleStatusChange = (rowData) => {
    const userID = rowData.id;
    const userIndex = fetchedUsers.findIndex((el) => el.id === userID);
    const putUserUrl = `http://spiros.users.challenge.dev.monospacelabs.com/users/${userID}`;

    dispatch(fetchActions.putUserInit());
    axios
      .put(putUserUrl)
      .then((response) => {
        dispatch(fetchActions.putUserSuccess());
        const updatedUser = response.data;
        updateUsersTableData(updatedUser, userIndex);
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchActions.putUserFail());
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
