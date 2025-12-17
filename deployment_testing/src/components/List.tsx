import type React from "react";

interface ListProps {
  data: number[];
    render: (data:number,index:number)=>React.ReactNode;
}

const List: React.FC<ListProps> = ({ data, render }) => {
  return <>
  {data.map((item, index) => {
    if(render && typeof render === "function")
    {
        return render(item, index);
    }
    return <div key={index}>{item}</div>
  }
    
    )}
    
    </>;
};


export default List;
