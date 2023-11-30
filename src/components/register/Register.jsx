/* eslint-disable no-unused-vars */
import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';

const Register = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    watch,
  } = useForm();

  const onhandleSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
      alert('User Created Successfully');
    } catch (error) {
      console.error(error);
      alert('User creation failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className='max-w-md p-6 bg-white rounded-md shadow-md'>
      <form onSubmit={handleSubmit(onhandleSubmit)} className="mt-4">
        <h5 className="text-2xl mb-4">Create an account</h5>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Your email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required={true}
            {...register('email', {
              required: 'Email is Required!!!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className={`form-input w-full px-3 py-2 border border-gray-300 rounded-md ${errors.email && 'border-red-500'}`}
            onKeyUp={() => trigger('email')}
          />
          {errors.email && (
            <small className="text-red-500"> {errors.email.message}</small>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Your password</label>
          <input
            name="password"
            id="password"
            type="password"
            autoComplete="off"
            className={`form-input w-full px-3 py-2 border border-gray-300 rounded-md ${errors.password && 'border-red-500'}`}
            required={true}
            {...register('password', {
              required: 'You must specify a password',
              // ...other password validations
            })}
            onKeyUp={() => trigger('password')}
          />
          {errors.password && (
            <small className="text-red-500"> {errors.password.message}</small>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Confirm your password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            {...register('confirmPassword', {
              validate: (value) =>
                value === watch('password', '') || 'The passwords do not match',
            })}
            autoComplete="off"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            className={`form-input w-full px-3 py-2 border border-gray-300 rounded-md ${errors.confirmPassword && 'border-red-500'}`}
            required={true}
            onKeyUp={() => trigger('confirmPassword')}
          />
          {errors.confirmPassword && (
            <small className="text-red-500"> {errors.confirmPassword.message}</small>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Your full name</label>
          <input
            name="name"
            type="text"
            className={`form-input w-full px-3 py-2 border border-gray-300 rounded-md ${errors.name && 'border-red-500'}`}
            required={true}
            {...register('name', { required: 'Fullname is Required!!!' })}
            onKeyUp={() => trigger('name')}
          />
          {errors.name && <small className="text-red-500"> {errors.name.message}</small>}
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create an account
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
