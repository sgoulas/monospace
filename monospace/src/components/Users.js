import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";
import Switch from "@material-ui/core/Switch";
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
    const user = [...fetchedUsers][userIndex];
    user.active = !user.active;

    dispatch(fetchActions.putUserInit());
    axios
      .put(putUserUrl, user)
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
      title: "TYPE",
      field: "type",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
        fontWeight: 600,
      },
    },
    {
      title: "NAME",
      field: "name",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
        fontWeight: 600,
      },
    },
    {
      title: "EMAIL",
      field: "email",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
        fontWeight: 600,
      },
    },
    {
      title: "TELEPHONE",
      field: "phone",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
        fontWeight: 600,
      },
    },
    {
      title: "STATUS",
      field: "status",
      headerStyle: {
        backgroundColor: "#F8F9FB",
        color: "#39628D",
        fontWeight: 600,
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
