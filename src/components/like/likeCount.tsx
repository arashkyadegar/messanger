import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function LikeCountComponent(props: any) {
     const dispatch = useAppDispatch();
     return (
          <>
<h1>12.34 Likes</h1>
          </>
     );
}

export default LikeCountComponent;
