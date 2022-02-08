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
                            <ProductQtImage src="/assets/minus.png" />
                                <ProductQtTesxt>9</ProductQtTesxt>
                            <ProductQtImage src="/assets/plus.png" />
                       </ProductQuantity>
                       <ProductPrice>
                            R$ {data.price}
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