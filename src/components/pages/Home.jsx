import "./Home.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Tweet from "../pages/tweet/Tweet";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

const Home = () => {

    const user = JSON.parse(localStorage.getItem('userDetails'))
    const [list, setList] = useState([]);
    const [tweet, setTweet] = useState("");
    const id = uuidv4();
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('list'));
        if (items) {
            setList([...items]);
        }
    }, [])

    if (list.length > 0) {
        localStorage.setItem("list", JSON.stringify(list));
    }
    const handleChange = (e) => {
        setTweet(e.target.value);
    };

    const handleClick = () => {
        setList([...list,
        {
            id: id,
            message: tweet,
            name: user.displayName,
            like: 0,
            comment: 0,
        },
        ]);
        setTweet("");
    };

    return (
        <>
            <Sidebar />

            <div className="tweetBox">

                <div className="main1">
                    <hr style={{ width: "110%" }} />
                    Home<hr style={{ width: "110%" }} />
                </div>
                <form>
                    <div className="tweetBox-input">

                        <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRdU5gCDtbkmHD7UE7uzMhCgB7w4SvYvNFqpN5YW9KM9exAzb_3qq7o0edETrSp0ZdQA&usqp=CAU"
                        />
                        <input
                            type="text"
                            placeholder="What's happening?"
                            value={tweet}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        className="tweetBox-imageInput"
                        placeholder="Optional: Enter Image URL"
                        type="text"
                        value={tweet}
                        onChange={handleChange}
                    />

                    <button
                        type="button"
                        className="tweetButon" disabled={!tweet} onClick={handleClick}
                    > Tweet
                    </button>

                    <hr style={{ width: "110%", height: "2px", background: "gray" }} />
                    <div>
                        <Tweet />

                    </div>

                </form>
            </div>
            <Widgets />
        </>
    );
};
export default Home;