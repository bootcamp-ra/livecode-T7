import React from 'react';
import Post from './Post';

const posts = [
  {
    sourceProfile: 'assets/img/meowed.svg',
    nameProfile: 'meowed',
    qtdLikes: '101.523',
    mainLiked: 'respondeai',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/img/gato-telefone.svg',
    liked: true,
    mediaType: 'image',
  },
  {
    sourceProfile: 'assets/img/barked.svg',
    nameProfile: 'barked',
    qtdLikes: '99.159',
    mainLiked: 'adorable_animals',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/img/dog.svg',
    liked: false,
    mediaType: 'image',
  },
  {
    sourceProfile: 'assets/img/barked.svg',
    nameProfile: 'pizza_lele',
    qtdLikes: '99.159',
    mainLiked: 'adorable_animals',
    mainLikedSource: 'assets/img/respondeai.svg',
    media:
      'https://uploaddeimagens.com.br/images/003/946/946/full/8dbb1a0e-a3cc-4ce3-9a2f-595adb27e1fd.jpeg?1658185441',
    liked: false,
    mediaType: 'image',
  },
  {
    sourceProfile: 'assets/img/barked.svg',
    nameProfile: 'pizza_lele',
    qtdLikes: '99.159',
    mainLiked: 'adorable_animals',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/video/video.mp4',
    liked: false,
    mediaType: 'video',
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post
          key={index}
          sourceProfile={post.sourceProfile}
          nameProfile={post.nameProfile}
          qtdLikes={post.qtdLikes}
          mainLiked={post.mainLiked}
          mainLikedSource={post.mainLikedSource}
          media={post.media}
          liked={post.liked}
          mediaType={post.mediaType}
        />
      ))}
    </div>
  );
}
