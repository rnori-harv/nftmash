import React, { useState, useRef } from "react";
import cn from "classnames";
import Button from './elements/Button';
import { DataStore, sectionFooterSecondaryContent, Auth } from 'aws-amplify';
import {Candidate, User, Caption} from '../models'

const INITIAL_HEIGHT = 46;

const CommentBox = (myPost) => {
    const containerRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [commentValue, setCommentValue] = useState("");

    const outerHeight = useRef(INITIAL_HEIGHT);
    const textRef = useRef(null);

    const onExpand = () => {
        if (!isExpanded) {
            outerHeight.current = containerRef.current.scrollHeight;
            setIsExpanded(true);
        }
    }

    const onChange = (e) => {
        setCommentValue(e.target.value);
	}

    const onClose = () => {
        setCommentValue("");
        outerHeight.current = INITIAL_HEIGHT;
        setIsExpanded(false);
    };

    const onSubmit = async (e) => {
      const myUser = await Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {return user.username;})
    .catch(err => console.log(err));
        e.preventDefault();

        console.log(myUser)
        const myPostID = myPost['myPost']
        const original = await DataStore.query(User, c => c.username('eq', myUser)).then(user => {return user;});
        //const original = DataStore.query(User, c => c.username===myUser.username);
        let user = original
        console.log(user)
        if (original.length === 0)
        {
           user = DataStore.save(new User({username: myUser})).then(user => {return user;});
        }
        user = user['0'].id
        await DataStore.save(
          new Caption({
            body: commentValue,
            likes: 0,
            captionUserId: user,
            candidateID: myPostID
          }));
        onClose();
        /**
        const candi = await DataStore.query(Candidate, myPostID);
        let cap = await DataStore.query(Caption, c=>c.body('eq', commentValue)).then(c => {return c;});
        const capModel=cap['0']
        console.log(candi)
        console.log(capModel)
        
        console.log(commentValue)
        **/
    }

    return (
        <form
        onSubmit={onSubmit}
        ref={containerRef}
        className={cn("comment-box", {
          expanded: isExpanded,
          collapsed: !isExpanded,
                modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
          color: 'black'
        }}
      >
        <div className="header">
        <div className="user">
      </div>
        </div>
    <textarea
      ref={textRef}
      onClick={onExpand}
      onFocus={onExpand}
      onChange={onChange}
      className="comment-field"
      placeholder="Make a caption"
      value={commentValue}
      name="comment"
      id="comment"
      color="black"
    >
    </textarea>
    <div className="actions">
      <Button type="button" className="cancel" tag="a" color="dark" wideMobile onClick={onClose}>
      Cancel
      </Button>
      <Button type="submit" disabled={commentValue.length < 1} tag="a" color="primary" onClick={onSubmit} wideMobile>
      Submit
      </Button>
    </div>
	    </form>
    );
};

export default CommentBox;