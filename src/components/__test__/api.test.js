import React from "@testing-library/react";
import "@testing-library/jest-dom";
import Api from "../../__mocks__/api";
import DATA from "../../setupJest";
import fetchMock from 'fetch-mock';

//TRy to get this working on the actual api, then try mocking
//https://www.youtube.com/watch?v=mHXhuPHiDj8&ab_channel=LeighHalliday

const data = DATA;


it("Then the correct average should be returned", async () => {
  
  fetchMock.get('/api/v1/information-panel/', {
    status: 404,
    body: { "a": "a" }
  }, { overwriteRoutes: true })

  const data = await Api();
  console.log(data)


});
