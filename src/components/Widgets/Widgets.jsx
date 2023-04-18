import "./Widgets.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-search-icon">
                <SearchOutlinedIcon className="widgets-search-input" />
                <input type={"text"} placeholder="Search Twitter" />
            </div>
            <div className="widgets-container">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1605957811162054656'} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Developer"
                    options={{ height: 400 }}

                />

                <TwitterTweetEmbed tweetId={"1638384880756350979"} />
            </div>
        </div>
    )
}

export default Widgets;