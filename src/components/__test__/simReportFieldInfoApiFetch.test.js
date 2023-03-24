import React from "@testing-library/react";
import "@testing-library/jest-dom";
import SimReportFieldInfoApiFetch from "../../helper/simReportFieldInfoApiFetch.js";
import fetchMock from 'fetch-mock';

it("mock infoPanelAPiFetch 200", async () => {
 
    fetchMock.get('/api/v1/sim-reports/field-info/', {
        status: 200,
        body: {"a": "a"}
      })
    
      const data = await SimReportFieldInfoApiFetch();
      console.log(data)

      expect(data).toEqual({"a": "a"});

})

it("mock infoPanelAPiFetch 404 receive underfined", async () => {

    fetchMock.get('/api/v1/sim-reports/field-info/', {
        status: 404,
        body: { "a": "a" }
      }, { overwriteRoutes: true })
    
      const data = await SimReportFieldInfoApiFetch();
      console.log(data)

      expect(data).toEqual(undefined);

})

 
  