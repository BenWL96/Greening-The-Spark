import React from "@testing-library/react";
import "@testing-library/jest-dom";
import simReportDetailAPiFetch from "../../helper/simReportDetailAPiFetch.js";
import fetchMock from 'fetch-mock';

it("mock simReportDetailAPiFetch 200", async () => {
    
    const inputGameId = "1";

    fetchMock.get("/api/v1/sim-reports/" + inputGameId + "/details/", {
        status: 200,
        body: {"a": "a"}
      })
    
      const data = await simReportDetailAPiFetch(inputGameId);
      console.log(data)

      expect(data).toEqual({"a": "a"});

})

it("mock simReportDetailAPiFetch 404 receive underfined", async () => {

    const inputGameId = "1";
    
    fetchMock.get("/api/v1/sim-reports/" + inputGameId + "/details/", {
        status: 404,
        body: { "a": "a" }
      }, { overwriteRoutes: true })
    
      const data = await simReportDetailAPiFetch(inputGameId);
      console.log(data)

      expect(data).toEqual(404);

})

 
  