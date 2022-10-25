export const WindSolarDemandDetails = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Wind, Solar, And Demand Inputs',
      },
    },
    scales: {
      y: {
        type: 'linear',
     
        position: 'left',
        title: {
          display: true,
          text: 'Giga Watts / Hour'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      }
    
    },
    };
  

  
  
  export const ManualControlOfRenewablesDetails = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Manual Control Of Renewables',
      },
    },
    scales: {
      y: {
        type: 'linear',
     
        position: 'left',
        title: {
          display: true,
          text: 'Giga Watts / Hour'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Time Of Day'
        }
      }
    
    },
    };
  

    export const BatteriesHydroSupplyStatusDetails = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Batteries, Pumped Hydro And Overall Supply Status',
        },
      },
      scales: {
        y: {
          type: 'linear',
       
          position: 'left',
          title: {
            display: true,
            text: 'Giga Watts / Hour'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Time Of Day'
          }
        }
      
      },
    };

export const Labels = ['00:00', '01:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
  

