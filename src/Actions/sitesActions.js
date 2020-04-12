//list of actions Used for uplifting data to main store
export const changeSiteName = (newSiteName) => {
  return {
    type: "CHANGE_SITE_NAME",
    payload: newSiteName,
  };
};
