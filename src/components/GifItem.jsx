

export const GifItem = ({image}) => {
  return (
    <li  className="card">
                    <p>{image.title}</p>
                    <img src={image.url} alt="" />
                </li>
  )
}
