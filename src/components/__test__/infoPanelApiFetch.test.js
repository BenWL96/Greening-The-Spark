import React from "@testing-library/react";
import "@testing-library/jest-dom";
import infoPanelApiFetch from "../../helper/infoPanelApiFetch.js";
import fetchMock from 'fetch-mock';

it("mock infoPanelAPiFetch 200", async () => {
 
    fetchMock.get('/api/v1/information-panel/', {
        status: 200,
        body: {"a": "a"}
      })
    
      const data = await infoPanelApiFetch();
      console.log(data)

      expect(data).toEqual({"a": "a"});

})

it("mock infoPanelAPiFetch 404 receive underfined", async () => {

    fetchMock.get('/api/v1/information-panel/', {
        status: 404,
        body: { "a": "a" }
      }, { overwriteRoutes: true })
    
      const data = await infoPanelApiFetch();
      console.log(data)

      expect(data).toEqual(404);

})

 
  