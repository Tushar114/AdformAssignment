export const SelectUserData = (state) => {
  return state.campaign.data;
};

export const SelectIsLoading = (state) => {
  return state.campaign.isLoading;
};

export const SelectError = (state) => {
  return state.campaign.error;
};
