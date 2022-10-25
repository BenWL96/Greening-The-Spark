import React, { getAllByText, getByText, render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import Api from '../../helper/api';
import DATA from '../../setupJest';



//TRy to get this working on the actual api, then try mocking
//https://www.youtube.com/watch?v=mHXhuPHiDj8&ab_channel=LeighHalliday


    it('Then the correct average should be returned', async () => {
        //expect(results).toEqual(DATA);
        //const input_game_id = 1;
        //results = await Api(input_game_id);
        const input_game_id = 5;
        try {
            let res = await fetch("/api/v1/sim-reports/" + input_game_id + "/details/", {
            method: "GET",
            });
            let json = await res.json();
    
            if (res.status === 200) {
                console.log(json);
                return json;
            }else {
                console.log("sorry but the fetch failed");
                return;
            }
    
            } catch (err) {
                console.log(err);
                return;
            } 
        
            

    });