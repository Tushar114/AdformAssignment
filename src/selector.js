import { createSelector } from 'reselect';
const CampaignData = require('./data.json');

export const SelectUserData = (state) => {
  return state.campaign.data;
};

export const SelectIsLoading = (state) => {
  return state.campaign.isLoading;
};

export const SelectError = (state) => {
  return state.campaign.error;
};

export const SelectIsDateChanged = (state) => {
  return state.campaign.isDateChanged;
};

export const getCampUsers = createSelector(
  SelectUserData,
  SelectIsDateChanged,
  (userData, isDateChanged) => {
    let userArr = [];
    if (!isDateChanged) {
      for (let i = 0; i < userData.length; i++) {
        for (let j = 0; j < CampaignData.data.length; j++) {
          if (CampaignData.data[j].userId === userData[i].id) {
            userArr.push(CampaignData.data[j]);
          }
        }
      }
      return userArr;
    } else {
      return [...userData];
    }
  }
);
