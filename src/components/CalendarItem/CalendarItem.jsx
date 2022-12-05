// import React, { useState } from 'react';


// import { useSelector, useDispatch } from 'react-redux';

// function CalendarItem({ week }) {

//     const dispatch = useDispatch();

//     const addWeek = () => {
//         console.log(week);

//         setShowAddBtn(false)
//         // need to have this update a reducer with add in
//         dispatch({
//             type: 'ADD_WEEK',
//             payload: week
//         })
//     }

//     const removeWeek = () => {
//         console.log(week);

//         setShowAddBtn(true)
//         // need to have this update a reducer with removal
//         // dispatch a local array that pizza is saved to
//         dispatch({
//             type: 'DELETE_WEEK',
//             payload: week
//         })

//     }

//     const [showAddBtn, setShowAddBtn] = useState(true);

//     return (
//         <>
//             <div className='weekItem'>
//             <div>
               
//             </div>
//                 <div className='weekItemName'>
//                     {week.residence}
//                 </div>
//                 <div>
//                     {week.vehicle}
//                 </div>
//                 <div>
//                     {week.distance}
//                 </div>
//                 <div>
//                     {week.worktrip}
//                 </div>
//                 <div>
//                     {week.othertrips}
//                 </div>
//                 <div>
//                     {week.meat}
//                 </div>
//                 <div>
//                     {week.takeout}
//                 </div>
//                 <div>
//                     {week.shop}
//                 </div>
//                 <div>
//                     {week.flights}
//                 </div>

//                 {/* conditional redering for buttons */}
//                 {showAddBtn ?
//                     <button onClick={addWeek}>Add</button>
//                     :
//                     <button onClick={removeWeek}>Remove</button>
//                 }

//             </div>
//         </>
//     )
// }

// export default CalendarItem;