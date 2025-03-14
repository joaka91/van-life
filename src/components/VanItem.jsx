export default function VanItem({ imageUrl, name, price, type }) {
  return (
    <div className="van-item">
      <img className="van-item__image" src={imageUrl} alt="A van" />
      <div className="van-item__container">
        <p className="van-item__name">{name}</p>
        <p className="van-item__price">${price}<br/><span>/day</span></p>
      </div>
      {type && <div className="van-item__type">{type}</div>}
    </div>
  )
}