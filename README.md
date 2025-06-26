# CO-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Cesar La chira

## Ejemplo

```
import {} from ''
```

```
<ProductCard
       
          product={product}
          onChange={handleOnChange}
          initialValues={{
            count: 4,
            maxCount:10
          }}
        >
         {
          ({reset, increaseBy, isMaxCountReached, count}) => (
            <>
              <ProductImage/>
              <ProductTitle />
              <ProductButtons />
            </>
          )
         }
        </ProductCard>
```
