import { useState } from 'react';
import { FormRow, FormRowSelect } from '@/components';
import Wrapper from '@/assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import { handleChange, createProduct } from '@/features/product/productSlice';

const AddProduct = () => {
  const {
    _id,
    isLoading,
    image,
    title,
    type,
    subtitle,
    description,
    color,
    reviews,
    stars,
    productColors: [],
  } = useSelector((store) => store.product);
  // const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        _id,
        isLoading,
        new: true,
        image,
        title,
        type,
        subtitle,
        description,
        color,
        reviews,
        stars,
        productColors: [],
      })
    );
  };

  const handleProductInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3 className='mb-10 flex item-center justify-center'>ADD PRODUCT</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='_id'
            labelText='Name: '
            value={_id}
            handleChange={handleProductInput}
          />
          <FormRow
            type='file'
            name='image'
            labelText='Image: '
            value={image}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='title'
            labelText='Title: '
            value={title}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='type'
            labelText='Type: '
            value={type}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='subtitle'
            labelText='Subtitle: '
            value={subtitle}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='description'
            labelText='Description: '
            value={description}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='color'
            labelText='Color: '
            value={color}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='reviews'
            labelText='Reviews: '
            value={reviews}
            handleChange={handleProductInput}
          />
          <FormRow
            type='text'
            name='stars'
            labelText='Stars: '
            value={stars}
            handleChange={handleProductInput}
          />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <button
            className='btn btn-block submit-btn'
            type='submit'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddProduct;
