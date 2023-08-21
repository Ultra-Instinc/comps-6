import Accordion from "../conponents/accordian";
const AccordionPage = () => {
    const items=[
        {
            id:'dgiojdfg',
            label:'HTML',
            content:'Can i use Html or nor because Can i use Html or nor because Can i use Html or nor because Can i use Html or nor because Can i use Html or nor because Can i use Html or nor because'
        },
        { 
            id:'gkjdfgdfg',
            label:'CSS',
            content:'Can i use Css or nor because Can i use Css or nor because Can i use Css or nor because Can i use Css or nor because Can i use Css or nor because Can i use Css or nor because'
        },
        { 
            id:'kjsnfdg',
            label:'JavaScript',
            content:'Can i use JavaScript or nor because Can i use JavaScript or nor because Can i use JavaScript or nor because Can i use JavaScript or nor because Can i use JavaScript or nor because Can i use JavaScript or nor because'
        }
    ]
    return ( <div className=" border-4  w-[400px]" >
        <Accordion items={items}/>
    </div> );
}
 
export default AccordionPage;