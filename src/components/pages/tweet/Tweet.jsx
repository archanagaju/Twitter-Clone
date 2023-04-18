import "./Tweet.css";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from '@mui/icons-material/Comment';

const Tweet = () => {

    const [state, setState] = useState(false);
    let list = JSON.parse(localStorage.getItem("list"));
    console.log(list);
    const hitlike = (item) => {
        const index = list.findIndex((i) => i.id === item.id);
        const updateItem = {
            ...list[index],
            like: list[index].like + 1,
        }
        list[index] = updateItem;
        localStorage.setItem('list', JSON.stringify(list));
        setState(!state);
    }

    return (

        <div>
            {list &&
                list.map((item, index) => {

                    return (
                        // <div>
                        // <h1>{JSON.stringify(item)}</h1>
                        // <h1>{item.name}</h1>
                        // <h1>{item.message}</h1>

                        // <h1>{item.like}</h1>
                        // <h1>{item.comment}</h1>
                        // </div>

                        <div className="tweet" key={index}>

                            <img className="img1"
                                alt=""
                                src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=2000"
                            />
                            <div className="content">
                                <div className="user-name">{item.name}</div> <br />
                                <div className="message">{item.message}</div>
                            </div>
                            <div className="likes">
                                <div className="like" onClick={() => hitlike(item)}>
                                    <FavoriteBorderIcon />{item.like}</div>
                                <div className="comment"><CommentIcon />{item.comment}</div>
                            </div>
                            <hr style={{ width: "110%", height: "1px", background: "gray" }} />
                        </div>
                    );
                })}
        </div>
    );

};

export default Tweet;