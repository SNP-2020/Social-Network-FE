import React, { useState } from 'react'
import Post from './Post'

const PostsList = () => {
  const ownerProfilePic = "https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg"
  const [posts, setPosts] = useState([
    {
      owner:
      {
        name: "John Doe",
        profilePic: ownerProfilePic

      },
      timestamp: "2020-05-15 13:36:22",
      content: {
        text: "Tempor id ea eiusmod ad. Adipisicing cupidatat commodo culpa aliquip cillum. Velit Lorem cupidatat labore proident nostrud culpa Lorem est adipisicing. Culpa consequat reprehenderit ad dolor dolore elit veniam aute id officia.",
        image: ""
      }
    },
    {
      owner:
      {
        name: "John Doe",
        profilePic: ownerProfilePic

      },
      timestamp: "2020-01-02 13:36:22",
      content: {
        text: "Magna enim laborum exercitation qui cupidatat sunt veniam amet minim veniam amet consectetur sit.",
        image: "https://i.ibb.co/CVDQwgP/johann-siemens-EPy0g-BJzz-ZU-unsplash.jpg"
      }
    },
    {
      owner:
      {
        name: "John Doe",
        profilePic: ownerProfilePic

      },
      timestamp: "2018-06-07 13:36:22",
      content: {
        text: "Do culpa cupidatat ullamco anim laborum ipsum sint deserunt aliquip labore est.",
        image: ""
      }
    },
    {
      owner:
      {
        name: "John Doe",
        profilePic: ownerProfilePic

      },
      timestamp: "2018-06-07 13:36:22",
      content: {
        text: "Aute magna mollit veniam adipisicing.",
        image: ""
      }
    },
    {
      owner:
      {
        name: "John Doe",
        profilePic: ownerProfilePic

      },
      timestamp: "2018-03-07 13:36:22",
      content: {
        text: "Non in non ad deserunt fugiat sit tempor sunt cupidatat. Esse adipisicing ad nulla adipisicing ipsum id ea non anim ea. Nisi excepteur consectetur ullamco aute duis sit minim sint quis dolor proident.",
        image: ""
      }
    }
  ])

  return (
    <div className="mt-5">
      {posts.map((post) => {
        return <Post postData={post} />
      })}
    </div>
  )
}


export default PostsList
