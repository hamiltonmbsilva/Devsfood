import React from 'react';
import { 
    Container, 
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtTesxt,
    ProductPrice,
} from './styled';

export default ({ data }) => {
    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                       <ProductQuantity>
                            <ProductQtImage src="" />
                                <ProductQtTesxt>9</ProductQtTesxt>
                            <ProductQtImage src="" />
                       </ProductQuantity>
                       <ProductPrice>
                            R$ {data.Price}
                       </ProductPrice>

                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton >Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}