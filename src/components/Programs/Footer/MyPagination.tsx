import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material";

const List = styled("ul")({
  ListStyled: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent:"space-between",
  width: 500,
  fontSize:12,
  border:"1px solid #e5e7eb",
  height: 38,
  alignItems:"center",
});


function MyPagination(props:any) {
  const {count} = props;
  const { items } = usePagination({ count: count });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === "start-ellipsis"||type==="end-ellipsis") {
            children = "";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                 {page}
              </button>
            );
          } else {
            children = (
              <button type="button" className="w-8" {...item}>
                {type}
              </button>
            );
          }
          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}

export default MyPagination;
