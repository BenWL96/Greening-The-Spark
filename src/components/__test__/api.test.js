import React, { getAllByText, getByText, render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import Api from '../../__mocks__/api';
import DATA from '../../setupJest';


//TRy to get this working on the actual api, then try mocking
//https://www.youtube.com/watch?v=mHXhuPHiDj8&ab_channel=LeighHalliday


  
global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(
             {json: DATA}
        )  
    })
})


    it('Then the correct average should be returned', async () => {
        const input_game_id = 5;
        const json =  Api(input_game_id);
        console.log("fetch did something");

        //THis is a pending promise 
        //Promise { <pending> }
        console.log(json);

        //expect(json).toEqual(DATA);
        //expect(fetch).toHaveBeenCalledTimes(1);
    });