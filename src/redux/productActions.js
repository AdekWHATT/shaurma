import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_START,
    FETCH_PRODUCTS_ERROR,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT
} from './actionTypes';

const ProductsComponent = ({ products, loading, error, fetchProducts, addProduct, removeProduct, updateProduct }) => {
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddProduct = (product) => {
        addProduct(product);
    }

    const handleRemoveProduct = (id) => {
        removeProduct(id);
    }

    const handleUpdateProduct = (product) => {
        updateProduct(product);
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
                        <button onClick={() => handleUpdateProduct(product)}>Update</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleAddProduct({ name: 'New Product', id: Date.now() })}>Add Product</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (product) => dispatch(addProduct(product)),
        removeProduct: (id) => dispatch(removeProduct(id)),
        updateProduct: (product) => dispatch(updateProduct(product)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);