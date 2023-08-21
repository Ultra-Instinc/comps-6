import Link from "./link";
function SideBar  ()  {
    const links=[
        {id:'sdgfdfg',label:'Dropdown',path:'/dropdown'},
        {id:'rghfghgf',label:'Accordion',path:'/accordion'},
        {id:'dfhgdfgh',label:'Buttons',path:'/buttons'},
        {id:'dsfgdfgf',label:'Modal',path:'/modal'},
        {id:'fsdgdfg',label:'Table',path:'/table'},
        {id:'djfgndsn',label:'Counter',path:'/counter'}
    ]

    const renderedLinks=links.map((link)=>{
        return <Link activeClassName='font-bold border-l-4 border-blue-500 pl-2' className='mb-5' key={link.id} to={link.path} > {link.label} </Link>
    })

    return ( 
        <div className="sticky top-0 flex flex-col items-start">
          {renderedLinks}
        </div>
     );
}
 
export default SideBar;