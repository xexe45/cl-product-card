
import React from "react";
import  renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from "../data/products";

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', ()=> {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" className="custom-class" />
        )
        console.log(wrapper.toJSON());

        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    test('debe de mostrar el componente con el nombre del producto', ()=> {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (

                        <ProductImage />
                    )
                        
                    
                }
            </ProductCard>
        )
        console.log(wrapper.toJSON());

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})