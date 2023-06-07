import { TableContainer, TableBody, Table, TableHead, TableRow } from '@mui/material';
import { StyleTableCell } from './tabbleCSS';
import TableDetail from './TableDetail';

function TableData(props: any) {
    const valuePageNumber = props.valuePageNumber;
    const valueRowPerPage = props.valueRowPerPage;
    const displayFromDelete = props.displayFromDelete;
    const displayEditForm = props.displayEditForm;
    const displayAndPutDataForFormView = props.displayAndPutDataForFormView;
    const listProducts = props.listProducts;
    // end test

    return (
        <div className="Wrap w-[97%] mobile:overflow-auto mx-auto  border-[#EFEFEF] rounded-md border-2">
            <TableContainer>
                <Table
                    sx={{
                        minWidth: {
                            xs: 700,
                            sm: '100%',
                        },
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <StyleTableCell sx={{ width: '29px' }}>STT</StyleTableCell>
                            <StyleTableCell sx={{ width: '181px' }}>Title</StyleTableCell>
                            <StyleTableCell
                                sx={{
                                    width: { xs: '500px', sm: '700px' },
                                }}
                            >
                                Description
                            </StyleTableCell>
                            <StyleTableCell sx={{ width: '30px' }}>Price </StyleTableCell>
                            <StyleTableCell sx={{ width: '30px' }}> Stock</StyleTableCell>
                            <StyleTableCell sx={{ width: '50px' }}>Status</StyleTableCell>
                            <StyleTableCell sx={{ width: '20px', paddingRight: '0' }}>View</StyleTableCell>
                            <StyleTableCell sx={{ width: '' }}>{''}</StyleTableCell>
                            <StyleTableCell sx={{ width: '' }}>{''}</StyleTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listProducts
                            .slice(
                                (valuePageNumber - 1) * valueRowPerPage,
                                (valuePageNumber - 1) * valueRowPerPage + valueRowPerPage,
                            )
                            .map((product: any, index: number) => {
                                return (
                                    <TableDetail
                                        key={product.id}
                                        product={product}
                                        ordinalNumber={valueRowPerPage * (valuePageNumber - 1) + index}
                                        displayFromDelete={displayFromDelete}
                                        displayEditForm={displayEditForm}
                                        displayAndPutDataForFormView={displayAndPutDataForFormView}
                                    />
                                );
                            })}
                        <TableRow
                            sx={{
                                height: '76px',
                                // width: "20px",
                                paddingLeft: '20px',
                                paddingRight: 0,
                            }}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableData;
