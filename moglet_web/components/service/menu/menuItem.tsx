export default function MenuItem({ menu })  {
  return (
    <div key={menu.uid}>
      <h4>메뉴명 : {menu.name}</h4>
      <h4>메뉴 소개 : {menu.content}</h4>
      <h4>가격 : {menu.price}</h4>
      <h4>is_main : {menu.is_main}</h4>
      <hr/>
    </div>
  )
}