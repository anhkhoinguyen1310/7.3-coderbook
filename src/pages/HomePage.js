import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActions, commentActions } from '../redux/actions'
import { Card, Button, Row, Col } from 'react-bootstrap'



const Post = ({ post }) => {
    const dispatch = useDispatch()
    const [commentBody, setCommentBody] = useState()

    const onCreateComment = () => {
        dispatch(commentActions.createComment(post, commentBody))
        setCommentBody("")
    }


    return (
        <Card className="mt-5">
            <Card.Body>
                <Card.Title>{post.body}</Card.Title>
                <Row>
                    {post?.photos?.map(photo => {
                        return (
                            <img src={photo.url} style={{ width: 545 }} alt="" />
                        )
                    })}
                </Row>
                <Row>
                    <Card.Text>{post.createdAt}</Card.Text>
                </Row>
                <Row className="d-flex flex-column">
                    {post.comments && post.comments.map(c => {
                        return <h5>{c.body}</h5>
                    })}
                </Row>
                <Row>
                    <Col lg={8}>
                        <input style={{ width: 500 }} value={commentBody} onChange={(e) => setCommentBody(e.target.value)}>
                        </input>
                        <Button onClick={onCreateComment} variant="primary">Post</Button>
                    </Col>

                </Row>

            </Card.Body>
        </Card>
    )
}

const HomePage = () => {

    const {loading, error, posts} = useSelector(reduxStoreState => reduxStoreState.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(postActions.getPosts())
    }, [dispatch])

    if (loading) return <h1>Loading!!</h1>
    if (error) return <h1>Error</h1>
    return (
        <div>
            <h1>HomePage</h1>
            {posts.map(p => (
                <Post post={p} />
            ))}
        </div>
    )
}

export { HomePage }