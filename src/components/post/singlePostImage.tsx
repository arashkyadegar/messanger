import React from 'react';
import { useAppDispatch } from "../../redux/store/hooks"

function SinglePostImageComponent(props: any) {
     const dispatch = useAppDispatch();
     const img = `images/${props.images}`;
     console.log(img)
     return (
          <img src={img} alt="" title=" " />);
}

export default SinglePostImageComponent;
