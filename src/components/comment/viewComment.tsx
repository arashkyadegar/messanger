

import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function ViewAllCommentComponent(props: any) {
     const count = props.count;
     const dispatch = useAppDispatch();
     return (
          <>
               <button className='text-xs'>view all {count}  comments </button>
          </>
     );
}

export default ViewAllCommentComponent;
