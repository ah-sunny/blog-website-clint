import React from 'react';

const test = () => {

    const table = useReactTable({
        columns,
        data,
        initialState: {
          columnOrder: ['age', 'firstName', 'lastName'], //customize the initial column order
          columnVisibility: {
            id: false //hide the id column by default
          },
          expanded: true, //expand all rows by default
          sorting: [
            {
              id: 'age',
              desc: true //sort by age in descending order by default
            }
          ]
        },
        //...
      })
      


    return (
        <div>
            
        </div>
    );
};

export default test;