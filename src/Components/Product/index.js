import {React} from 'react';

import { ProdData } from './rightdata';
import {Details} from './details';
import { MDBContainer,MDBRow,MDBCol } from 'mdb-react-ui-kit';

export const ProductDetails = () => {
    return(
        <>
        <MDBContainer>
            <MDBRow>
                <ProdData />
            </MDBRow>
            <MDBRow >
                <Details />
            </MDBRow>
        </MDBContainer>
        </>
    );
}
