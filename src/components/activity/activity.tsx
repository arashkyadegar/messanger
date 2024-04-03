import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"
import ActivityLikeComponent from './activityLike';
import ActivityMentionComponent from './activityMention';
import ActivityFollowReqComponent from './activityFollowReq';

function ActivityComponent(props: any) {
     const dispatch = useAppDispatch();
     const username = "amin_.ta"
     return (
          <>
               <div className='p-2 w-[320px] flex flex-row-reverse justify-between  gap-4 top-0 z-50'>
                    <h1 >Activity</h1>
               </div>
               <div className=' flex flex-col '>
                    <div className='text-left p-1 my-2'>Today</div>
                    <div className=' grid grid-cols-4'>
                         <ActivityLikeComponent />
                         <ActivityMentionComponent />
                         <ActivityFollowReqComponent />
                    </div>
                    <div className=' text-left p-1  my-2'>This week</div>
                    <div className=' grid grid-cols-4'>
                         <ActivityFollowReqComponent />
                         <ActivityLikeComponent />
                         <ActivityMentionComponent />

                    </div>
                    <div className=' text-left p-1  my-2'>This month</div>
                    <div className=' grid grid-cols-4'>

                         <ActivityLikeComponent />
                         <ActivityLikeComponent />
                         <ActivityLikeComponent />
                         <ActivityLikeComponent />



                    </div>
               </div>
          </>
     );
}

export default ActivityComponent;
