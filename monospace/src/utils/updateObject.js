const updateObject = (oldObject, updatedObject) => {
  return {
    ...oldObject,
    ...updateObject,
  };
};

export default updateObject;
