import React, {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import GtsApp from "../gtsApp/gtsApp.js";
import fetchMock from 'fetch-mock';

describe('test ', () => {
  test('should display mock data', async () => {
    fetchMock.mock('/api/v1/information-panel/', {
      status: 200,
      body: { data: 'mock data' },
    });
    

    render(<GtsApp />);
    const dataElement = await screen.findByText('mock data');
    expect(dataElement).toBeInTheDocument();
  });
});
 
  