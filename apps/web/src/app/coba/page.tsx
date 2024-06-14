'use client';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const SnapTest = () => {
  const [orderId, setOrderId] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [snapToken, setSnapToken] = useState<string>('');
  const [error, setError] = useState<string>('');

  const generateSnapToken = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ snapToken: string }>(
        'http://localhost:8001/midtrans/generate-snap-token',
        {
          orderId,
          productName,
          totalPrice: parseInt(totalPrice),
          quantity: parseInt(quantity),
        },
      );
      setSnapToken(response.data.snapToken);
    } catch (error) {
      setError('Failed to generate Snap Token');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Midtrans Snap Test</h1>
      <form onSubmit={generateSnapToken} className="space-y-4">
        <div className="flex flex-col mb-4">
          <label htmlFor="orderId" className="mb-1">
            Order ID:
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="productName" className="mb-1">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="totalPrice" className="mb-1">
            Total Price:
          </label>
          <input
            type="number"
            id="totalPrice"
            value={totalPrice}
            onChange={(e) => setTotalPrice(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="quantity" className="mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="border border-gray-300 rounded-md py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Generate Snap Token
        </button>
      </form>
      {snapToken && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Snap Token:</h2>
          <p className="bg-gray-100 rounded-md p-4">{snapToken}</p>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SnapTest;
