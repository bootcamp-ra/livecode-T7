import React from 'react';

export default function Post({
  sourceProfile,
  nameProfile,
  mediaType,
  media,
  mainLikedSource,
  qtdLikes,
  mainLiked,
  liked,
}) {
  const [isLiked, setIsliked] = React.useState(liked);

  function likePost() {
    setIsliked(!isLiked);
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={sourceProfile} />
          {nameProfile}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        {mediaType === 'image' ? (
          <img src={media} onClick={() => setIsliked(true)} />
        ) : (
          <video onClick={likePost} autoPlay muted loop controls>
            <source src={media} type="video/mp4"></source>
          </video>
        )}
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {isLiked ? (
              <ion-icon
                name="heart"
                className="liked"
                onClick={likePost}
              ></ion-icon>
            ) : (
              <ion-icon name="heart-outline" onClick={likePost}></ion-icon>
            )}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={mainLikedSource} />
          <div className="texto">
            Curtido por <strong>{mainLiked}</strong> e{' '}
            <strong>outras {qtdLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
